/* ============================================================
   HẢI PHÒNG CÔNG DÂN SỐ — script.js
   Vanilla JS (ES module) + Firebase Auth (Google) + Firestore.
   ============================================================ */

import {
  auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged,
  db, doc, getDoc, setDoc, collection, query, orderBy, limit, getDocs
} from "./firebase-config.js";

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

/* ---------------- 1. DỮ LIỆU ĐỊA DANH ---------------- */
// Dữ liệu từng địa danh nằm trong thư mục locations/ (1 file .js / địa danh)
// để dễ thêm/sửa mà không cần biết lập trình — xem locations/README.md.
import { LOCATIONS } from "./locations/index.js";

// Dữ liệu lễ hội cho bản đồ "Văn hoá" (mục Khám phá) — mỗi lễ hội 1 file
// trong thư mục festivals/, xem festivals/index.js. Bản đồ này CHƯA gắn vào
// hệ thống tem/điểm/chứng nhận chung của hành trình Lịch sử — sẽ hợp nhất khi
// xây dựng trang Tủ thành tích.
import { FESTIVALS } from "./festivals/index.js";

const TOTAL_STOPS = LOCATIONS.length;
const QUESTIONS_PER_VISIT = 5;
const MAX_SCORE = TOTAL_STOPS * QUESTIONS_PER_VISIT;

// Ngưỡng xếp loại tính theo tỉ lệ % điểm đạt được (0-33% / 34-66% / 67-100%)
// để tự động co giãn nếu sau này thay đổi số điểm dừng hoặc số câu/lượt.
const RANK_THRESHOLDS = [
  { min: 0, max: Math.round(MAX_SCORE * 0.33), label: "Người mới khám phá", medal: "bronze" },
  { min: Math.round(MAX_SCORE * 0.33) + 1, max: Math.round(MAX_SCORE * 0.66), label: "Nhà thám hiểm Hải Phòng", medal: "silver" },
  { min: Math.round(MAX_SCORE * 0.66) + 1, max: MAX_SCORE, label: "Công dân số Hải Phòng xuất sắc", medal: "gold" }
];

/* ---------------- 2. MINH HOẠ SVG THEO ĐỊA DANH ---------------- */
const ICONS = {
  "bach-dang": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#9FD6DC"/>
    <path d="M0 110 Q50 95 100 110 T200 110 V160 H0 Z" fill="#0E6B7A"/>
    <path d="M0 125 Q50 112 100 125 T200 125 V160 H0 Z" fill="#0a4f5a"/>
    <g stroke="#5b3a24" stroke-width="4" stroke-linecap="round">
      <line x1="60" y1="95" x2="55" y2="118"/><line x1="80" y1="90" x2="78" y2="120"/>
      <line x1="100" y1="92" x2="102" y2="118"/><line x1="120" y1="88" x2="124" y2="120"/>
      <line x1="140" y1="94" x2="146" y2="118"/>
    </g>
    <path d="M20 70 L55 70 L48 85 L27 85 Z" fill="#FFF8EC"/>
    <path d="M37 45 V70 M37 50 L52 62 L37 66 Z" fill="#D9412E"/>
  </svg>`,
  "den-nghe": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#FBEFDD"/>
    <rect x="30" y="100" width="140" height="12" fill="#A62D1E"/>
    <rect x="45" y="60" width="14" height="42" fill="#26313A"/>
    <rect x="141" y="60" width="14" height="42" fill="#26313A"/>
    <rect x="93" y="60" width="14" height="42" fill="#26313A"/>
    <polygon points="30,60 100,25 170,60" fill="#D9412E"/>
    <polygon points="30,60 100,35 170,60" fill="#A62D1E"/>
    <circle cx="100" cy="18" r="5" fill="#E8A33D"/>
    <g transform="translate(100,10)"><circle r="4" fill="#D9412E"/></g>
  </svg>`,
  "ben-k15": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#9FD6DC"/>
    <path d="M0 120 Q50 108 100 120 T200 120 V160 H0 Z" fill="#0E6B7A"/>
    <path d="M55 118 L145 118 L130 138 L70 138 Z" fill="#26313A"/>
    <rect x="90" y="80" width="6" height="38" fill="#5b3a24"/>
    <path d="M96 84 L130 100 L96 108 Z" fill="#D9412E"/>
    <path d="M40 55 a10 18 0 0 1 20 0 z" fill="#26313A" opacity=".5"/>
    <circle cx="150" cy="45" r="16" fill="#E8A33D" opacity=".9"/>
  </svg>`,
  "nha-hat-lon": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#FBEFDD"/>
    <rect x="30" y="70" width="140" height="55" fill="#FFF8EC" stroke="#A62D1E" stroke-width="3"/>
    <polygon points="20,70 100,35 180,70" fill="#D9412E"/>
    <g fill="none" stroke="#0E6B7A" stroke-width="4">
      <line x1="48" y1="78" x2="48" y2="122"/><line x1="70" y1="78" x2="70" y2="122"/>
      <line x1="92" y1="78" x2="92" y2="122"/><line x1="114" y1="78" x2="114" y2="122"/>
      <line x1="136" y1="78" x2="136" y2="122"/><line x1="158" y1="78" x2="158" y2="122"/>
    </g>
    <rect x="30" y="122" width="140" height="8" fill="#A62D1E"/>
  </svg>`,
  "cat-ba": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#9FD6DC"/>
    <circle cx="160" cy="35" r="18" fill="#E8A33D"/>
    <path d="M0 120 Q40 105 90 120 T200 118 V160 H0 Z" fill="#0E6B7A"/>
    <path d="M20 120 Q35 70 55 120 Z" fill="#3C9F6B"/>
    <path d="M60 122 Q80 60 105 122 Z" fill="#2f8a5c"/>
    <path d="M110 120 Q130 78 155 120 Z" fill="#3C9F6B"/>
    <circle cx="80" cy="100" r="5" fill="#26313A"/>
    <path d="M75 100 q5 -8 10 0" stroke="#26313A" stroke-width="2" fill="none"/>
  </svg>`,
  "do-son": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#FFF8EC"/>
    <circle cx="165" cy="30" r="16" fill="#E8A33D"/>
    <path d="M0 100 Q50 88 100 100 T200 100 V160 H0 Z" fill="#9FD6DC"/>
    <path d="M0 115 Q50 105 100 115 T200 115 V160 H0 Z" fill="#0E6B7A"/>
    <polygon points="60,60 100,60 80,20" fill="#D9412E"/>
    <line x1="80" y1="20" x2="80" y2="100" stroke="#5b3a24" stroke-width="3"/>
    <g stroke="#26313A" stroke-width="3" fill="none">
      <path d="M130 95 q8 -14 16 0"/><path d="M140 95 q8 -14 16 0"/>
    </g>
  </svg>`,
  "dinh-hang-kenh": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#FBEFDD"/>
    <rect x="35" y="98" width="130" height="14" fill="#A62D1E"/>
    <rect x="50" y="58" width="12" height="40" fill="#5b3a24"/>
    <rect x="94" y="58" width="12" height="40" fill="#5b3a24"/>
    <rect x="138" y="58" width="12" height="40" fill="#5b3a24"/>
    <path d="M20 58 Q100 20 180 58 Q100 42 20 58 Z" fill="#0E6B7A"/>
    <path d="M20 58 Q100 30 180 58" fill="none" stroke="#26313A" stroke-width="2"/>
    <circle cx="100" cy="15" r="4" fill="#E8A33D"/>
  </svg>`,
  "tu-luong-xam": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#FBEFDD"/>
    <rect x="55" y="90" width="90" height="30" fill="#A62D1E"/>
    <rect x="65" y="55" width="10" height="35" fill="#26313A"/>
    <rect x="125" y="55" width="10" height="35" fill="#26313A"/>
    <polygon points="45,55 100,25 155,55" fill="#D9412E"/>
    <line x1="100" y1="25" x2="100" y2="10" stroke="#5b3a24" stroke-width="2"/>
    <path d="M100 10 L118 16 L100 22 Z" fill="#E8A33D"/>
  </svg>`,
  "nui-voi": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#FFF8EC"/>
    <circle cx="160" cy="30" r="14" fill="#E8A33D"/>
    <path d="M0 130 Q40 40 90 130 Z" fill="#8a9a7a"/>
    <path d="M70 130 Q110 55 150 130 Z" fill="#3C9F6B"/>
    <ellipse cx="105" cy="105" rx="18" ry="14" fill="#26313A"/>
    <path d="M0 140 H200 V160 H0 Z" fill="#9FD6DC"/>
  </svg>`,
  "ho-tam-bac": `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#1b2a38"/>
    <rect x="20" y="60" width="18" height="50" fill="#0E6B7A"/>
    <rect x="45" y="40" width="16" height="70" fill="#0E6B7A"/>
    <rect x="70" y="55" width="18" height="55" fill="#0E6B7A"/>
    <circle cx="30" cy="70" r="2" fill="#E8A33D"/>
    <circle cx="52" cy="55" r="2" fill="#E8A33D"/>
    <circle cx="78" cy="68" r="2" fill="#E8A33D"/>
    <path d="M0 115 Q50 105 100 115 T200 115 V160 H0 Z" fill="#0a4f5a"/>
    <circle cx="30" cy="145" r="2" fill="#E8A33D" opacity=".6"/>
    <circle cx="52" cy="150" r="2" fill="#E8A33D" opacity=".6"/>
    <circle cx="78" cy="147" r="2" fill="#E8A33D" opacity=".6"/>
  </svg>`
};

// Ảnh thật của mỗi địa danh giờ nằm ngay trong file locations/<id>.js (field
// "photos"), không còn tra cứu qua object riêng ở đây nữa — xem photosForPart().

// Minh hoạ SVG dùng chung cho các lễ hội chưa có ảnh thật (trống hội + lồng
// đèn) — thay bằng ảnh thật trong festivals/<id>.js (field "photos") sau.
const FESTIVAL_ICON = `<svg viewBox="0 0 200 160"><rect width="200" height="160" fill="#FBEFDD"/>
  <circle cx="100" cy="78" r="34" fill="#D9412E"/>
  <circle cx="100" cy="78" r="34" fill="none" stroke="#A62D1E" stroke-width="3"/>
  <line x1="100" y1="44" x2="100" y2="112" stroke="#A62D1E" stroke-width="2"/>
  <line x1="66" y1="78" x2="134" y2="78" stroke="#A62D1E" stroke-width="2"/>
  <line x1="100" y1="30" x2="100" y2="44" stroke="#5b3a24" stroke-width="3"/>
  <path d="M40 120 Q100 100 160 120" stroke="#E8A33D" stroke-width="4" fill="none"/>
  <circle cx="40" cy="120" r="5" fill="#E8A33D"/>
  <circle cx="160" cy="120" r="5" fill="#E8A33D"/>
</svg>`;

// Minh hoạ SVG tự vẽ riêng cho từng lễ hội chưa có ảnh thật đúng bản quyền
// (xem Mục IX bản thuyết minh) — thay cho icon lồng đèn dùng chung ở trên,
// để mỗi lễ hội có hình ảnh đúng chủ đề của chính lễ hội đó thay vì ảnh giữ
// chỗ chung chung. Khoá theo đúng id trong festivals/<id>.js.
const FESTIVAL_ICONS = {
  "choi-trau-do-son": `<svg viewBox="0 0 200 160">
    <rect width="200" height="160" fill="#FBEFDD"/>
    <g fill="#D9412E">
      <path d="M8 14 L24 14 L16 30 Z"/>
      <path d="M38 14 L54 14 L46 30 Z"/>
      <path d="M146 14 L162 14 L154 30 Z"/>
      <path d="M176 14 L192 14 L184 30 Z"/>
    </g>
    <path d="M0 118 Q100 102 200 118 V160 H0 Z" fill="#D9C18F"/>
    <path d="M0 130 Q100 118 200 130 V160 H0 Z" fill="#B08947"/>
    <path d="M100 84 Q120 68 115 90" stroke="#4A3222" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M104 82 Q128 62 122 86" stroke="#4A3222" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M100 84 Q80 68 85 90" stroke="#2A2018" stroke-width="6" fill="none" stroke-linecap="round"/>
    <path d="M96 82 Q72 62 78 86" stroke="#2A2018" stroke-width="6" fill="none" stroke-linecap="round"/>
    <ellipse cx="66" cy="104" rx="32" ry="21" fill="#4A3222"/>
    <circle cx="98" cy="92" r="15" fill="#4A3222"/>
    <ellipse cx="44" cy="120" rx="7" ry="15" fill="#4A3222"/>
    <ellipse cx="82" cy="123" rx="7" ry="13" fill="#4A3222"/>
    <ellipse cx="134" cy="104" rx="32" ry="21" fill="#2A2018"/>
    <circle cx="102" cy="92" r="15" fill="#2A2018"/>
    <ellipse cx="156" cy="120" rx="7" ry="15" fill="#2A2018"/>
    <ellipse cx="118" cy="123" rx="7" ry="13" fill="#2A2018"/>
    <circle cx="100" cy="88" r="7" fill="#E8A33D" opacity=".85"/>
    <path d="M92 78 L96 84 M108 78 L104 84 M100 74 L100 82" stroke="#E8A33D" stroke-width="3" stroke-linecap="round" opacity=".85"/>
  </svg>`
};

/* ---------------- 3. TRẠNG THÁI TÀI KHOẢN & TIẾN TRÌNH (FIRESTORE) ---------------- */
let currentUser = null; // { uid, displayName, photoURL, email, className, school }
let progress = { score: 0, completedIds: [], festivalCompletedIds: [], bestScore: 0, checkins: [] };

function defaultProgress() {
  return { score: 0, completedIds: [], festivalCompletedIds: [], bestScore: 0, checkins: [] };
}

async function fetchProgress(uid) {
  const ref = doc(db, "progress", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data();
    return {
      score: data.score || 0,
      completedIds: Array.isArray(data.completedIds) ? data.completedIds : [],
      festivalCompletedIds: Array.isArray(data.festivalCompletedIds) ? data.festivalCompletedIds : [],
      bestScore: data.bestScore || 0,
      checkins: Array.isArray(data.checkins) ? data.checkins : []
    };
  }
  const fresh = defaultProgress();
  await setDoc(ref, fresh);
  return fresh;
}

// Kèm theo vài trường thông tin học sinh (không chuẩn hoá) để Bảng xếp hạng
// đọc được trực tiếp mà không cần join dữ liệu giữa các collection.
function saveProgress() {
  if (!currentUser) return;
  const ref = doc(db, "progress", currentUser.uid);
  const payload = {
    ...progress,
    displayName: currentUser.displayName || "",
    className: currentUser.className || "",
    school: currentUser.school || "",
    photoURL: currentUser.photoURL || ""
  };
  setDoc(ref, payload).catch((err) => console.error("Không lưu được tiến trình:", err));
}

// "Chơi lại" chỉ áp dụng cho hành trình Địa danh lịch sử — không đụng tới
// festivalCompletedIds/checkins của các hành trình khác.
function resetProgress() {
  progress = {
    score: 0,
    completedIds: [],
    festivalCompletedIds: progress.festivalCompletedIds || [],
    bestScore: progress.bestScore || 0,
    checkins: progress.checkins || []
  };
  saveProgress();
}

async function fetchUserProfile(uid) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? snap.data() : null;
}

async function saveUserProfile(uid, data) {
  await setDoc(doc(db, "users", uid), data, { merge: true });
}

// Điểm dừng thứ i mở khoá ("available") khi điểm dừng liền trước đã "done".
function statusForIndex(idx) {
  const loc = LOCATIONS[idx];
  if (progress.completedIds.includes(loc.id)) return "done";
  if (idx === 0) return "available";
  return progress.completedIds.includes(LOCATIONS[idx - 1].id) ? "available" : "locked";
}

/* ---------------- 4. ĐIỀU HƯỚNG MÀN HÌNH ---------------- */
const screens = {
  login: document.getElementById("screen-login"),
  home: document.getElementById("screen-home"),
  explore: document.getElementById("screen-explore"),
  soon: document.getElementById("screen-soon"),
  map: document.getElementById("screen-map"),
  "map-culture": document.getElementById("screen-map-culture"),
  contests: document.getElementById("screen-contests"),
  leaderboard: document.getElementById("screen-leaderboard"),
  profile: document.getElementById("screen-profile"),
  result: document.getElementById("screen-result")
};
const navbarEl = document.getElementById("navbar");
const navbarScore = document.getElementById("navbar-score");

function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    el.classList.toggle("is-active", key === name);
  });
  navbarEl.classList.toggle("navbar-hidden", name === "login");
  navbarScore.hidden = name === "home" || name === "login";
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name !== "result") clearConfetti();
  if (name === "map") renderMap();
  if (name === "map-culture") renderFestivalMap();
  if (name === "result") renderResult();
  if (name === "leaderboard") renderLeaderboard();
  if (name === "profile") renderProfile();
}

function clearConfetti() {
  document.querySelectorAll(".confetti-piece").forEach(el => el.remove());
}

document.querySelectorAll("[data-nav]").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (btn.dataset.soonTitle) {
      document.getElementById("soon-title").textContent = btn.dataset.soonTitle;
      document.getElementById("soon-text").textContent = btn.dataset.soonText || "Nội dung đang được xây dựng.";
    }
    showScreen(btn.getAttribute("data-nav"));
  });
});

/* ---------------- 5. TOP NAV: ĐIỂM SỐ & NGƯỜI DÙNG ---------------- */
function updateScoreChips() {
  document.getElementById("score-value").textContent = progress.score;
  document.getElementById("progress-chip").textContent =
    progress.completedIds.length + "/" + TOTAL_STOPS;
}

function updateUserChip() {
  const chip = document.getElementById("navbar-user");
  if (!currentUser) { chip.hidden = true; return; }
  document.getElementById("user-avatar").src = currentUser.photoURL || "";
  document.getElementById("user-name").textContent = currentUser.displayName || currentUser.email || "Học sinh";
  chip.hidden = false;
}

/* ---------------- 6. ĐĂNG NHẬP GOOGLE & HỒ SƠ ---------------- */
const modalProfile = document.getElementById("modal-profile");
const profileForm = document.getElementById("profile-form");
const loginErrorEl = document.getElementById("login-error");

document.getElementById("btn-google-signin").addEventListener("click", async () => {
  loginErrorEl.hidden = true;
  try {
    await signInWithPopup(auth, googleProvider);
    // onAuthStateChanged sẽ tiếp tục xử lý sau khi đăng nhập thành công.
  } catch (err) {
    console.error(err);
    loginErrorEl.textContent = "Đăng nhập thất bại (" + (err.code || err.message) + ")";
    loginErrorEl.hidden = false;
  }
});

document.getElementById("btn-signout").addEventListener("click", () => {
  signOut(auth).catch((err) => console.error(err));
});

profileForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const displayName = document.getElementById("profile-name").value.trim();
  const className = document.getElementById("profile-class").value.trim();
  const school = document.getElementById("profile-school").value.trim();
  const errorEl = document.getElementById("profile-error");
  const submitBtn = profileForm.querySelector(".profile-submit");
  if (!displayName || !className || !school) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Đang lưu...";
  errorEl.hidden = true;
  try {
    await saveUserProfile(currentUser.uid, {
      displayName, className, school,
      email: currentUser.email || "",
      photoURL: currentUser.photoURL || ""
    });
    currentUser.displayName = displayName;
    currentUser.className = className;
    currentUser.school = school;
    modalProfile.hidden = true;
    updateUserChip();
    await enterApp();
  } catch (err) {
    console.error(err);
    errorEl.textContent = "Không lưu được hồ sơ, kiểm tra kết nối mạng và thử lại.";
    errorEl.hidden = false;
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Bắt đầu hành trình →";
  }
});

async function enterApp() {
  progress = await fetchProgress(currentUser.uid);
  // Đồng bộ ngay tên/lớp/trường/ảnh đại diện vào hồ sơ điểm mỗi lần đăng nhập,
  // để Bảng xếp hạng luôn hiển thị đúng tên dù học sinh chưa chơi lượt nào.
  saveProgress();
  updateScoreChips();
  if (progress.completedIds.length >= TOTAL_STOPS) showScreen("result");
  else if (progress.completedIds.length > 0) showScreen("map");
  else showScreen("home");
}

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    currentUser = null;
    updateUserChip();
    showScreen("login");
    return;
  }

  currentUser = { uid: user.uid, displayName: user.displayName, photoURL: user.photoURL, email: user.email };
  updateUserChip();

  let profile = null;
  try {
    profile = await fetchUserProfile(user.uid);
  } catch (err) {
    console.error("Không đọc được hồ sơ:", err);
  }

  if (!profile || !profile.className || !profile.school) {
    document.getElementById("profile-name").value = (profile && profile.displayName) || user.displayName || "";
    document.getElementById("profile-class").value = (profile && profile.className) || "";
    document.getElementById("profile-school").value = (profile && profile.school) || "";
    showScreen("login");
    modalProfile.hidden = false;
    return;
  }

  currentUser.displayName = profile.displayName || user.displayName;
  currentUser.className = profile.className;
  currentUser.school = profile.school;
  updateUserChip();
  await enterApp();
});

/* ---------------- 7. MÀN HÌNH BẢN ĐỒ (Leaflet + OpenStreetMap) ---------------- */
const ZOOM_DETAIL = 15; // mức zoom khi bấm 1 điểm trong danh sách hành trình
const DECLUTTER_THRESHOLD_DEG = 0.03; // ~3km — coi các điểm gần nhau cỡ này là "trùng khu vực" ở tầm nhìn tổng quan
const MARKER_DIAMETER_PX = 38; // khớp với .map-marker-pin (width/height 38px)

// Với các điểm nằm quá gần nhau (ví dụ nhiều di tích cùng nằm giữa trung tâm
// thành phố), gộp thành từng nhóm rồi dàn marker trong nhóm ra quanh vị trí
// thật bằng 1 độ lệch PIXEL CỐ ĐỊNH (không phải toạ độ) — nhờ vậy marker luôn
// hiện đúng cạnh vị trí thật ở MỌI mức zoom, kể cả khi phóng to hẳn vào 1 điểm.
// Marker vẫn được đặt (Leaflet) đúng tại toạ độ thật; độ lệch chỉ là CSS
// transform áp trực tiếp lên hình tròn, kèm 1 chấm nhỏ + nét nối tới đúng vị
// trí thật để không gây hiểu nhầm.
function declutterLatLngs(latlngs) {
  const n = latlngs.length;
  const used = new Array(n).fill(false);
  const groups = [];

  for (let i = 0; i < n; i++) {
    if (used[i]) continue;
    const group = [i];
    used[i] = true;
    for (let j = i + 1; j < n; j++) {
      if (used[j]) continue;
      const d = Math.hypot(latlngs[i][0] - latlngs[j][0], latlngs[i][1] - latlngs[j][1]);
      if (d < DECLUTTER_THRESHOLD_DEG) { group.push(j); used[j] = true; }
    }
    groups.push(group);
  }

  const result = new Array(n);
  groups.forEach((group) => {
    if (group.length === 1) {
      const i = group[0];
      result[i] = { true: latlngs[i], offset: null };
      return;
    }
    // Bán kính (px) đảm bảo khoảng cách giữa 2 marker liền kề trong nhóm luôn
    // >= đường kính marker (không chồng lấp), dù nhóm có bao nhiêu điểm.
    const angleStep = 360 / group.length;
    const minChord = MARKER_DIAMETER_PX + 22;
    const radiusPx = Math.max(42, (minChord / 2) / Math.sin((angleStep * Math.PI / 180) / 2));
    group.forEach((i, idx) => {
      const angleDeg = idx * angleStep - 90;
      const rad = (angleDeg * Math.PI) / 180;
      result[i] = {
        true: latlngs[i],
        offset: { x: Math.cos(rad) * radiusPx, y: Math.sin(rad) * radiusPx, angleDeg, radiusPx }
      };
    });
  });
  return result;
}

// Dựng HTML cho 1 marker, có/không kèm độ lệch (xem declutterLatLngs ở trên).
function buildMarkerIconHtml(pinHtml, offset) {
  if (!offset) {
    return '<div class="map-marker-pin-wrap"><div class="map-marker-pin" style="left:-19px;top:-19px;">' + pinHtml + "</div></div>";
  }
  return (
    '<div class="map-marker-pin-wrap">' +
    '<span class="marker-true-dot"></span>' +
    '<span class="marker-tail" style="width:' + offset.radiusPx + 'px; transform: rotate(' + offset.angleDeg + 'deg);"></span>' +
    '<div class="map-marker-pin" style="left:-19px;top:-19px; transform: translate(' + offset.x + 'px,' + offset.y + 'px);">' + pinHtml + "</div>" +
    "</div>"
  );
}

// Khi bấm 1 địa danh trong danh sách hành trình: bay tới + đánh dấu nổi bật
// (vòng tròn lan toả quanh marker) + mở hộp nhỏ ghi tên/địa chỉ ngay cạnh
// marker đó, để dễ quan sát đây là vị trí nào trên bản đồ. Bấm "Xem toàn bộ"
// (map-reset) sẽ xoá đánh dấu + đóng hộp này đi.
function createMapHighlighter() {
  let current = null;
  return {
    show(marker) {
      this.clear();
      current = marker;
      const el = marker.getElement();
      if (el) {
        const pin = el.querySelector(".map-marker-pin-inner");
        if (pin) pin.classList.add("is-highlighted");
      }
      marker.openPopup();
    },
    clear() {
      if (!current) return;
      const el = current.getElement();
      if (el) {
        const pin = el.querySelector(".map-marker-pin-inner");
        if (pin) pin.classList.remove("is-highlighted");
      }
      current.closePopup();
      current = null;
    }
  };
}

const stopListEl = document.getElementById("stop-list");
let leafletMap = null;
let markerLayer = null;
let routeLayer = null;
let mapBounds = null;
const historyHighlighter = createMapHighlighter();

function ensureLeafletMap() {
  if (leafletMap) return;
  leafletMap = L.map("map-canvas", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap"
  }).addTo(leafletMap);
  markerLayer = L.layerGroup().addTo(leafletMap);
  routeLayer = L.layerGroup().addTo(leafletMap);

  // Hiển thị đủ toàn bộ điểm dừng ngay từ đầu, tập trung quanh khu vực Hải
  // Phòng. Chỉ canh khung nhìn 1 LẦN lúc khởi tạo — không lặp lại ở mỗi lần
  // renderMap để không phá vỡ vị trí/zoom người chơi đã tự kéo chỉnh sau đó.
  const latlngs = LOCATIONS.map(loc => [loc.coords.lat, loc.coords.lng]);
  mapBounds = L.latLngBounds(latlngs);
  leafletMap.fitBounds(mapBounds, { padding: [30, 30] });
}

document.getElementById("map-reset").addEventListener("click", () => {
  historyHighlighter.clear();
  if (leafletMap && mapBounds) leafletMap.flyToBounds(mapBounds, { padding: [30, 30], duration: 0.8 });
});

function renderMap() {
  updateScoreChips();
  ensureLeafletMap();
  leafletMap.invalidateSize();

  historyHighlighter.clear();
  markerLayer.clearLayers();
  routeLayer.clearLayers();
  stopListEl.innerHTML = "";

  const latlngs = LOCATIONS.map(loc => [loc.coords.lat, loc.coords.lng]);
  const declutter = declutterLatLngs(latlngs);

  LOCATIONS.forEach((loc, idx) => {
    const status = statusForIndex(idx);
    const pos = declutter[idx];

    const iconLabel = status === "done" ? "✓" : status === "locked" ? "🔒" : String(idx + 1);
    const pinHtml = '<div class="map-marker-pin-inner status-' + status + '">' + iconLabel + "</div>";
    const icon = L.divIcon({
      className: "",
      html: buildMarkerIconHtml(pinHtml, pos.offset),
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });
    // status "available"/"done" luôn nổi lên trên "locked" để không bị các điểm dừng
    // gần nhau về mặt toạ độ che mất, đảm bảo luôn bấm được điểm đang mở.
    const zIndexOffset = status === "available" ? 200 : status === "done" ? 100 : 0;
    const marker = L.marker(pos.true, { icon, zIndexOffset }).addTo(markerLayer);
    marker.bindTooltip(
      status === "locked" ? "Hoàn thành điểm trước để mở khoá" :
      status === "available" ? "Nhấp để khám phá" : loc.name
    );
    marker.bindPopup(
      '<div class="map-popup"><strong>' + escapeHtml(loc.name) + '</strong><span>📍 ' + escapeHtml(loc.place) + '</span></div>',
      { closeButton: false, offset: [0, -20] }
    );
    // Bấm marker trên bản đồ: hiện luôn vòng tròn định vị + hộp địa chỉ (giống
    // hệt khi bấm ở danh sách hành trình), sau đó mới mở modal thông tin nếu
    // điểm dừng đã mở khoá.
    marker.on("click", () => {
      historyHighlighter.show(marker);
      if (status !== "locked") openInfoModal(loc.id);
    });

    const row = document.createElement("li");
    row.className = "stop-row";
    row.dataset.status = status;
    const rowIcon = status === "done" ? "✓" : status === "locked" ? "🔒" : (idx + 1);
    row.innerHTML =
      '<span class="stop-row-icon">' + rowIcon + "</span><span>" + loc.name + "</span>";
    row.addEventListener("click", () => {
      leafletMap.flyTo(pos.true, ZOOM_DETAIL, { duration: 0.8 });
      historyHighlighter.show(marker);
    });
    stopListEl.appendChild(row);
  });

  L.polyline(latlngs, { color: "#E8A33D", weight: 3, dashArray: "6 8", opacity: .85 }).addTo(routeLayer);

  const fillPct = Math.round((progress.completedIds.length / TOTAL_STOPS) * 100);
  document.getElementById("progress-fill").style.width = fillPct + "%";
  document.getElementById("progress-count").textContent = progress.completedIds.length;

  if (progress.completedIds.length >= TOTAL_STOPS) {
    showScreen("result");
  }
}

/* ---------------- 7b. BẢN ĐỒ VĂN HOÁ (LỄ HỘI) ----------------
   Bản đồ độc lập, không có khoá/mở tuần tự — mọi lễ hội đều xem được ngay.
   Chưa gắn vào tiến trình/tem/điểm chung của hành trình Lịch sử. */
const festivalListEl = document.getElementById("festival-list");
let festivalMap = null;
let festivalMarkerLayer = null;
let festivalMapBounds = null;
const festivalHighlighter = createMapHighlighter();

function ensureFestivalLeafletMap() {
  if (festivalMap) return;
  festivalMap = L.map("map-canvas-culture", { scrollWheelZoom: false });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "© OpenStreetMap"
  }).addTo(festivalMap);
  festivalMarkerLayer = L.layerGroup().addTo(festivalMap);

  const latlngs = FESTIVALS.map(f => [f.coords.lat, f.coords.lng]);
  festivalMapBounds = L.latLngBounds(latlngs);
  festivalMap.fitBounds(festivalMapBounds, { padding: [30, 30] });
}

document.getElementById("map-culture-reset").addEventListener("click", () => {
  festivalHighlighter.clear();
  if (festivalMap && festivalMapBounds) festivalMap.flyToBounds(festivalMapBounds, { padding: [30, 30], duration: 0.8 });
});

function renderFestivalMap() {
  ensureFestivalLeafletMap();
  festivalMap.invalidateSize();

  festivalHighlighter.clear();
  festivalMarkerLayer.clearLayers();
  festivalListEl.innerHTML = "";

  const latlngs = FESTIVALS.map(f => [f.coords.lat, f.coords.lng]);
  const declutter = declutterLatLngs(latlngs);

  FESTIVALS.forEach((fest, idx) => {
    const pos = declutter[idx];

    const pinHtml = '<div class="map-marker-pin-inner status-festival">' + (idx + 1) + "</div>";
    const icon = L.divIcon({
      className: "",
      html: buildMarkerIconHtml(pinHtml, pos.offset),
      iconSize: [0, 0],
      iconAnchor: [0, 0]
    });
    const marker = L.marker(pos.true, { icon }).addTo(festivalMarkerLayer);
    marker.bindTooltip("Nhấp để khám phá");
    marker.bindPopup(
      '<div class="map-popup"><strong>' + escapeHtml(fest.name) + '</strong><span>📍 ' + escapeHtml(fest.place) + '</span></div>',
      { closeButton: false, offset: [0, -20] }
    );
    marker.on("click", () => {
      festivalHighlighter.show(marker);
      openFestivalModal(fest.id);
    });

    const row = document.createElement("li");
    row.className = "stop-row";
    row.dataset.status = "available";
    row.innerHTML = '<span class="stop-row-icon">' + (idx + 1) + "</span><span>" + fest.name + "</span>";
    row.addEventListener("click", () => {
      festivalMap.flyTo(pos.true, ZOOM_DETAIL, { duration: 0.8 });
      festivalHighlighter.show(marker);
    });
    festivalListEl.appendChild(row);
  });
}

/* ---------------- 8. MODAL THÔNG TIN ĐỊA DANH (3 phần + chat AI) ---------------- */
const modalInfo = document.getElementById("modal-info");
const NARRATION_LABELS = { history: "Lịch sử", culture: "Văn hoá" };
let currentLocation = null;
let currentNarrationPart = "history";
let chatMessages = [];
let chatTurnIndex = 0;

// Dùng ảnh thật nếu có (location.photos.history / location.photos.culture,
// tối đa 5 ảnh mỗi phần) — carousel đổi bộ ảnh theo tab Lịch sử/Văn hoá đang
// mở. Phần nào
// chưa có ảnh riêng thì mượn tạm bộ ảnh của phần kia; hết sạch ảnh thật (cả
// hai phần) mới rơi về minh hoạ SVG dự phòng. Ảnh nào lỗi tải (mất mạng, link
// hỏng) tự động bị loại khỏi carousel.
let currentPhotoIndex = 0;
let currentPhotos = [];
let photoAutoTimer = null;
const PHOTO_AUTOPLAY_MS = 3500;

function stopPhotoAutoplay() {
  if (photoAutoTimer) {
    clearInterval(photoAutoTimer);
    photoAutoTimer = null;
  }
}

function startPhotoAutoplay(location) {
  stopPhotoAutoplay();
  if (currentPhotos.length <= 1) return;
  photoAutoTimer = setInterval(() => stepPhoto(location, 1), PHOTO_AUTOPLAY_MS);
}

function photosForPart(location, part) {
  const entry = location.photos;
  if (!entry) return [];
  const own = entry[part];
  if (own && own.length) return own;
  const other = entry[part === "history" ? "culture" : "history"];
  return other || [];
}

function renderInfoMedia(location) {
  const mediaEl = document.getElementById("info-media");
  stopPhotoAutoplay();
  currentPhotos = photosForPart(location, currentNarrationPart);
  mediaEl.classList.remove("has-carousel");
  if (!currentPhotos.length) {
    mediaEl.innerHTML = ICONS[location.id] || "";
    return;
  }
  currentPhotoIndex = 0;
  mediaEl.classList.add("has-carousel");
  mediaEl.innerHTML =
    '<img class="media-photo" id="media-photo" alt="">' +
    (currentPhotos.length > 1
      ? '<button type="button" class="media-nav-btn media-nav-prev" id="media-prev" aria-label="Ảnh trước">‹</button>' +
        '<button type="button" class="media-nav-btn media-nav-next" id="media-next" aria-label="Ảnh sau">›</button>' +
        '<div class="media-dots" id="media-dots"></div>'
      : "");
  showPhotoAt(location, currentPhotoIndex);

  if (currentPhotos.length > 1) {
    document.getElementById("media-prev").addEventListener("click", () => { stepPhoto(location, -1); startPhotoAutoplay(location); });
    document.getElementById("media-next").addEventListener("click", () => { stepPhoto(location, 1); startPhotoAutoplay(location); });
  }
  startPhotoAutoplay(location);
}

function showPhotoAt(location, index) {
  if (!currentPhotos.length) return;
  currentPhotoIndex = (index + currentPhotos.length) % currentPhotos.length;
  const img = document.getElementById("media-photo");
  if (!img) return;
  img.src = currentPhotos[currentPhotoIndex];
  img.alt = location.name + " (" + (currentPhotoIndex + 1) + "/" + currentPhotos.length + ")";
  img.onerror = () => {
    // Ảnh hỏng: bỏ khỏi danh sách rồi thử ảnh kế tiếp; hết sạch thì dùng SVG dự phòng.
    currentPhotos.splice(currentPhotoIndex, 1);
    if (!currentPhotos.length) {
      document.getElementById("info-media").innerHTML = ICONS[location.id] || "";
      return;
    }
    renderInfoMedia(location);
  };

  const dotsEl = document.getElementById("media-dots");
  if (dotsEl) {
    dotsEl.innerHTML = currentPhotos
      .map((_, i) => '<span class="media-dot' + (i === currentPhotoIndex ? " is-active" : "") + '"></span>')
      .join("");
  }
}

function stepPhoto(location, delta) {
  showPhotoAt(location, currentPhotoIndex + delta);
}

function openInfoModal(locationId) {
  currentLocation = LOCATIONS.find(l => l.id === locationId);
  if (!currentLocation) return;

  currentNarrationPart = "history";
  chatMessages = [];
  chatTurnIndex = 0;

  renderInfoMedia(currentLocation);
  document.getElementById("info-title").textContent = currentLocation.name;
  renderNarrationTab();
  renderChatThread();

  document.querySelectorAll(".info-view-btn").forEach(b => b.classList.toggle("is-active", b.dataset.view === "narration"));
  document.getElementById("view-narration").classList.remove("is-hidden");
  document.getElementById("view-chat").classList.add("is-hidden");

  modalInfo.hidden = false;
}

function closeInfoModal() {
  modalInfo.hidden = true;
  stopPhotoAutoplay();
  window.speechSynthesis && window.speechSynthesis.cancel();
  resetSpeakButton();
}

document.getElementById("info-close").addEventListener("click", closeInfoModal);
modalInfo.addEventListener("click", (e) => { if (e.target === modalInfo) closeInfoModal(); });

// Bản đồ Lịch sử chỉ hiển thị phần "history" (không còn tab Văn hoá — phần
// văn hoá/lễ hội nay thuộc bản đồ riêng ở Khám phá). currentNarrationPart
// luôn giữ giá trị "history".
function renderNarrationTab() {
  const part = currentLocation.narration[currentNarrationPart];
  const pointsHtml = part.points.map(p => "<li>" + escapeHtml(p) + "</li>").join("");
  document.getElementById("info-text").innerHTML =
    "<p>" + escapeHtml(part.intro) + "</p><ul>" + pointsHtml + "</ul>";
}

function narrationPartToText(part) {
  return part.intro + ". " + part.points.join(". ");
}

const infoSpeakBtn = document.getElementById("info-speak");

function resetSpeakButton() {
  infoSpeakBtn.textContent = "🔊 Nghe phần này";
  infoSpeakBtn.classList.remove("is-speaking");
}

infoSpeakBtn.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) return;
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    resetSpeakButton();
    return;
  }
  if (!currentLocation) return;
  const utter = new SpeechSynthesisUtterance(
    NARRATION_LABELS[currentNarrationPart] + ". " + narrationPartToText(currentLocation.narration[currentNarrationPart])
  );
  utter.lang = "vi-VN";
  utter.onend = resetSpeakButton;
  utter.onerror = resetSpeakButton;
  window.speechSynthesis.speak(utter);
  infoSpeakBtn.textContent = "⏸ Dừng đọc";
  infoSpeakBtn.classList.add("is-speaking");
});

document.querySelectorAll(".info-view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    document.querySelectorAll(".info-view-btn").forEach(b => b.classList.toggle("is-active", b === btn));
    document.getElementById("view-narration").classList.toggle("is-hidden", view !== "narration");
    document.getElementById("view-chat").classList.toggle("is-hidden", view !== "chat");
    window.speechSynthesis && window.speechSynthesis.cancel();
    resetSpeakButton();
  });
});

function renderChatThread() {
  const thread = document.getElementById("chat-thread");
  const optionsEl = document.getElementById("chat-options");
  const chatScript = (currentLocation && currentLocation.aiChat) || [];

  if (chatMessages.length === 0 && chatScript.length > 0) {
    chatMessages.push({ who: "bot", text: chatScript[0].ask });
  }

  thread.innerHTML = chatMessages
    .map(m => '<div class="chat-bubble chat-bubble-' + m.who + '">' + m.text + "</div>")
    .join("");
  thread.scrollTop = thread.scrollHeight;

  optionsEl.innerHTML = "";
  const turn = chatScript[chatTurnIndex];
  if (!turn) return;

  turn.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chat-quick-reply";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      chatMessages.push({ who: "user", text: opt.label });
      chatMessages.push({ who: "bot", text: opt.reply });
      chatTurnIndex += 1;
      const nextTurn = chatScript[chatTurnIndex];
      chatMessages.push({
        who: "bot",
        text: nextTurn ? nextTurn.ask : "Giờ thì mình cùng bước vào thử thách nhé! 🎉"
      });
      renderChatThread();
    });
    optionsEl.appendChild(btn);
  });
}

document.getElementById("info-start-quiz").addEventListener("click", () => {
  if (!currentLocation) return;
  modalInfo.hidden = true;
  window.speechSynthesis && window.speechSynthesis.cancel();
  resetSpeakButton();
  openQuizModal(currentLocation.id);
});

/* ---------------- 9. MODAL CÂU HỎI ----------------
   Mỗi lượt ghé 1 điểm dừng: lấy ngẫu nhiên QUESTIONS_PER_VISIT (5) câu từ
   quizBank của địa danh đó (nhiều dạng: trắc nghiệm / đoán ảnh mờ dần /
   sắp xếp mốc thời gian), trả lời lần lượt từng câu trong cùng 1 modal. */
const modalQuiz = document.getElementById("modal-quiz");
const quizDots = document.getElementById("quiz-dots");
const quizQuestionBox = document.getElementById("quiz-question-box");
const quizOptions = document.getElementById("quiz-options");
const quizBlurWrap = document.getElementById("quiz-blur-wrap");
const quizTimelineWrap = document.getElementById("quiz-timeline-wrap");
const quizFeedback = document.getElementById("quiz-feedback");
const quizNextBtn = document.getElementById("quiz-next");
const quizProgressLabel = document.getElementById("quiz-progress-label");

let quizLocation = null;
let quizSessionQuestions = [];
let quizSessionIndex = 0;
let quizSessionCorrectCount = 0;
let currentQ = null; // câu hỏi hiện tại trong phiên
let quizAnswered = false;
let blurLevel = 3;
const BLUR_STEPS = [14, 8, 3, 0];
let timelineShuffled = [];
let timelineSelectedOrder = [];

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function pickRandomQuestions(bank, n) {
  const pool = [...bank];
  const picked = [];
  const count = Math.min(n, pool.length);
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  return picked;
}

function openQuizModal(locationId) {
  quizLocation = LOCATIONS.find(l => l.id === locationId);
  if (!quizLocation) return;

  quizSessionQuestions = pickRandomQuestions(quizLocation.quizBank, QUESTIONS_PER_VISIT);
  quizSessionIndex = 0;
  quizSessionCorrectCount = 0;

  document.getElementById("quiz-location-name").textContent = quizLocation.name;
  renderQuizQuestion();

  modalQuiz.hidden = false;
}

function renderSessionDots() {
  quizDots.innerHTML = "";
  quizSessionQuestions.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i < quizSessionIndex) dot.className = "dot-done";
    else if (i === quizSessionIndex) dot.className = "dot-current";
    quizDots.appendChild(dot);
  });
}

function renderQuizQuestion() {
  quizAnswered = false;
  currentQ = quizSessionQuestions[quizSessionIndex];

  quizProgressLabel.textContent = "Câu " + (quizSessionIndex + 1) + "/" + quizSessionQuestions.length;
  document.getElementById("quiz-score").textContent = quizSessionCorrectCount + "/" + quizSessionQuestions.length + " đúng";
  renderSessionDots();

  quizFeedback.hidden = true;
  quizFeedback.className = "quiz-feedback";
  quizNextBtn.hidden = true;

  const isTimeline = currentQ.type === "timeline";
  quizQuestionBox.hidden = isTimeline;
  quizOptions.hidden = isTimeline;
  quizBlurWrap.hidden = currentQ.type !== "blur";
  quizTimelineWrap.hidden = !isTimeline;

  if (isTimeline) {
    openTimelineQuestion();
  } else {
    document.getElementById("quiz-question").textContent = currentQ.question;
    renderQuizOptions();
    if (currentQ.type === "blur") {
      blurLevel = 3;
      renderBlurImage();
    }
  }
}

// Ghi nhận kết quả 1 câu trong phiên + hiện phản hồi. Điểm/tiến trình tổng
// chỉ thực sự lưu vào Firestore khi kết thúc phiên (đủ 5 câu) — xem quizNextBtn.
function finishOneQuestion(isCorrect, correctAnswerNote) {
  quizFeedback.hidden = false;
  quizFeedback.className = "quiz-feedback " + (isCorrect ? "is-correct" : "is-wrong");
  quizFeedback.textContent = isCorrect
    ? "✓ Chính xác!"
    : "✗ Chưa đúng. " + (correctAnswerNote || "");

  if (isCorrect) quizSessionCorrectCount += 1;
  document.getElementById("quiz-score").textContent = quizSessionCorrectCount + "/" + quizSessionQuestions.length + " đúng";

  const isLastQuestion = quizSessionIndex >= quizSessionQuestions.length - 1;
  quizNextBtn.hidden = false;
  quizNextBtn.textContent = isLastQuestion ? "Nhận tem →" : "Câu tiếp theo →";
}

/* -- Dạng trắc nghiệm / đoán ảnh mờ (dùng chung options + correctIndex) -- */
function renderQuizOptions() {
  quizOptions.innerHTML = "";
  currentQ.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => checkAnswer(i));
    quizOptions.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  if (quizAnswered) return;
  quizAnswered = true;

  const optionEls = quizOptions.querySelectorAll(".quiz-option");
  optionEls.forEach((el, i) => {
    el.disabled = true;
    if (i === currentQ.correctIndex) el.classList.add("correct");
    else if (i === selectedIndex) el.classList.add("wrong");
  });

  const isCorrect = selectedIndex === currentQ.correctIndex;
  finishOneQuestion(isCorrect, isCorrect ? "" : "Đáp án đúng là: " + currentQ.options[currentQ.correctIndex]);
}

/* -- Dạng đoán ảnh mờ dần (ưu tiên ảnh thật của địa danh, hết ảnh mới dùng SVG dự phòng) -- */
function renderBlurImage() {
  const wrap = document.getElementById("quiz-blur-image");
  const photos = photosForPart(quizLocation, "history").concat(photosForPart(quizLocation, "culture"));
  if (photos.length) {
    const src = photos[Math.floor(Math.random() * photos.length)];
    wrap.innerHTML = '<img src="' + escapeHtml(src) + '" alt="">';
    const img = wrap.querySelector("img");
    img.onerror = () => { wrap.innerHTML = ICONS[quizLocation.id] || ""; };
  } else {
    wrap.innerHTML = ICONS[quizLocation.id] || "";
  }
  wrap.style.filter = "blur(" + BLUR_STEPS[blurLevel] + "px)";
  const btn = document.getElementById("quiz-blur-btn");
  btn.disabled = blurLevel === 0;
  btn.textContent = blurLevel === 0 ? "✨ Đã rõ nét!" : "🔍 Làm rõ thêm";
}

document.getElementById("quiz-blur-btn").addEventListener("click", () => {
  if (blurLevel > 0) blurLevel -= 1;
  renderBlurImage();
});

/* -- Dạng sắp xếp mốc thời gian -- */
function openTimelineQuestion() {
  timelineShuffled = currentQ.events.map((ev, i) => ({ ...ev, origIndex: i }));
  shuffleArray(timelineShuffled);
  timelineSelectedOrder = [];
  renderTimeline();
}

function renderTimeline() {
  const cardsEl = document.getElementById("timeline-cards");
  const slotsEl = document.getElementById("timeline-slots");
  const checkBtn = document.getElementById("timeline-check");

  cardsEl.innerHTML = "";
  timelineShuffled.forEach((ev, idx) => {
    const picked = timelineSelectedOrder.includes(idx);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "timeline-card" + (picked ? " is-picked" : "");
    btn.textContent = ev.year + " — " + ev.text;
    btn.disabled = picked || quizAnswered;
    btn.addEventListener("click", () => {
      timelineSelectedOrder.push(idx);
      renderTimeline();
    });
    cardsEl.appendChild(btn);
  });

  slotsEl.innerHTML = timelineSelectedOrder
    .map((idx, order) => {
      const ev = timelineShuffled[idx];
      return '<div class="timeline-slot">' + (order + 1) + ". " + ev.year + " — " + ev.text + "</div>";
    })
    .join("");

  checkBtn.disabled = quizAnswered || timelineSelectedOrder.length !== timelineShuffled.length;
}

document.getElementById("timeline-redo").addEventListener("click", () => {
  if (quizAnswered) return;
  timelineSelectedOrder = [];
  renderTimeline();
});

document.getElementById("timeline-check").addEventListener("click", () => {
  if (quizAnswered) return;
  quizAnswered = true;

  const chosenOrigOrder = timelineSelectedOrder.map(idx => timelineShuffled[idx].origIndex);
  const isCorrect = chosenOrigOrder.every((origIdx, pos) => origIdx === pos);

  document.querySelectorAll(".timeline-card").forEach(b => { b.disabled = true; });
  document.getElementById("timeline-check").disabled = true;
  document.getElementById("timeline-redo").disabled = true;

  const correctOrderText = currentQ.events.map(e => e.year).join(" → ");
  finishOneQuestion(isCorrect, isCorrect ? "" : "Thứ tự đúng là: " + correctOrderText);
});

function closeQuizModal() {
  modalQuiz.hidden = true;
  renderMap();
}

document.getElementById("quiz-close").addEventListener("click", closeQuizModal);
modalQuiz.addEventListener("click", (e) => { if (e.target === modalQuiz) closeQuizModal(); });

quizNextBtn.addEventListener("click", () => {
  const isLastQuestion = quizSessionIndex >= quizSessionQuestions.length - 1;
  if (!isLastQuestion) {
    quizSessionIndex += 1;
    renderQuizQuestion();
    return;
  }

  // Hoàn tất phiên thử thách của điểm dừng này — chốt điểm vào tiến trình chung.
  progress.score += quizSessionCorrectCount;
  if (!progress.completedIds.includes(quizLocation.id)) {
    progress.completedIds.push(quizLocation.id);
  }
  if (progress.completedIds.length >= TOTAL_STOPS && progress.score > progress.bestScore) {
    progress.bestScore = progress.score;
  }
  saveProgress();

  modalQuiz.hidden = true;
  openStampModal(quizLocation, "location");
});

/* ---------------- 9b. CHÚC MỪNG: TEM DI SẢN & CHECK-IN ----------------
   Dùng chung cho cả 2 hành trình đã có (Địa danh lịch sử / Lễ hội văn hoá) —
   checkinTarget lưu lại {id, name, type} của điểm dừng vừa hoàn thành để
   biết lưu vào progress.checkins với type nào và quay lại bản đồ nào. */
const modalStamp = document.getElementById("modal-stamp");
let selectedCheckinEmoji = null;
let pendingCheckinPhoto = null;
let checkinTarget = null;

function openStampModal(stop, type) {
  selectedCheckinEmoji = null;
  pendingCheckinPhoto = null;
  checkinTarget = { id: stop.id, name: stop.name, type };

  document.getElementById("stamp-badge").innerHTML = (type === "location" ? ICONS[stop.id] : (FESTIVAL_ICONS[stop.id] || FESTIVAL_ICON)) || "";
  document.getElementById("stamp-location-name").textContent = stop.name;
  document.getElementById("checkin-note").value = "";
  document.querySelectorAll(".checkin-emoji-btn").forEach(b => b.classList.remove("is-active"));
  document.getElementById("checkin-photo-input").value = "";
  document.getElementById("checkin-photo-preview").hidden = true;

  const isLastStop = type === "location" && progress.completedIds.length >= TOTAL_STOPS;
  document.getElementById("stamp-continue").textContent = isLastStop ? "Xem kết quả →" : "Tiếp tục hành trình →";

  modalStamp.hidden = false;
  launchConfetti();
}

document.querySelectorAll(".checkin-emoji-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedCheckinEmoji = btn.dataset.emoji;
    document.querySelectorAll(".checkin-emoji-btn").forEach(b => b.classList.toggle("is-active", b === btn));
  });
});

// Nén/thu nhỏ ảnh ngay trên trình duyệt (canvas) rồi lưu dạng data URL trong
// Firestore luôn — dự án chưa cấu hình Firebase Storage nên tránh phải setup
// thêm rule/bucket, ảnh check-in nhỏ (JPEG ~480px) vẫn nằm gọn trong giới hạn
// dung lượng 1MB/document của Firestore dù có đủ 10 điểm dừng.
function resizeImageFile(file, maxDim, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Không đọc được ảnh"));
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDim) { height = Math.round((height * maxDim) / width); width = maxDim; }
        else if (height > maxDim) { width = Math.round((width * maxDim) / height); height = maxDim; }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

document.getElementById("checkin-photo-input").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    pendingCheckinPhoto = await resizeImageFile(file, 480, 0.7);
    document.getElementById("checkin-photo-preview-img").src = pendingCheckinPhoto;
    document.getElementById("checkin-photo-preview").hidden = false;
  } catch (err) {
    console.error("Không xử lý được ảnh check-in:", err);
    alert("Không đọc được ảnh này, vui lòng chọn ảnh khác.");
  }
});

document.getElementById("checkin-use-avatar").addEventListener("click", () => {
  if (!currentUser || !currentUser.photoURL) {
    alert("Tài khoản của bạn chưa có ảnh đại diện Google để dùng.");
    return;
  }
  pendingCheckinPhoto = currentUser.photoURL;
  document.getElementById("checkin-photo-input").value = "";
  document.getElementById("checkin-photo-preview-img").src = pendingCheckinPhoto;
  document.getElementById("checkin-photo-preview").hidden = false;
});

document.getElementById("checkin-photo-remove").addEventListener("click", () => {
  pendingCheckinPhoto = null;
  document.getElementById("checkin-photo-input").value = "";
  document.getElementById("checkin-photo-preview").hidden = true;
});

document.getElementById("stamp-continue").addEventListener("click", () => {
  const note = document.getElementById("checkin-note").value.trim();
  if (selectedCheckinEmoji || note || pendingCheckinPhoto) {
    progress.checkins.push({
      locationId: checkinTarget.id,
      locationName: checkinTarget.name,
      type: checkinTarget.type,
      emoji: selectedCheckinEmoji || "",
      note,
      photo: pendingCheckinPhoto || "",
      ts: Date.now()
    });
    saveProgress();
  }
  modalStamp.hidden = true;
  if (checkinTarget.type === "festival") {
    renderFestivalMap();
  } else {
    renderMap(); // renderMap() tự chuyển sang Trang kết quả nếu đã đủ điểm dừng
  }
});

/* ---------------- 10. TRANG KẾT QUẢ ---------------- */
function renderResult() {
  const score = progress.score;
  document.getElementById("result-score").textContent = score;
  document.getElementById("result-max").textContent = MAX_SCORE;
  document.getElementById("result-badge-score").textContent = score;

  const rank = RANK_THRESHOLDS.find(r => score >= r.min && score <= r.max) || RANK_THRESHOLDS[0];
  document.getElementById("result-rank").textContent = rank.label;

  document.querySelectorAll(".medal").forEach(el => {
    el.classList.toggle("is-earned", el.dataset.medal === rank.medal);
  });

  launchConfetti();
}

document.getElementById("btn-back-to-map").addEventListener("click", () => showScreen("map"));
document.getElementById("btn-replay").addEventListener("click", () => {
  resetProgress();
  showScreen("map");
});

/* ---------------- 10a. CHỨNG NHẬN PDF + MÃ QR ---------------- */
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// Thư viện qrcodejs vẽ trực tiếp vào 1 thẻ div (canvas hoặc bảng <table> dự phòng).
function generateQrDataUrl(text, size) {
  return new Promise((resolve, reject) => {
    const holder = document.createElement("div");
    holder.style.position = "fixed";
    holder.style.left = "-9999px";
    document.body.appendChild(holder);
    try {
      new window.QRCode(holder, {
        text, width: size, height: size,
        correctLevel: window.QRCode.CorrectLevel.L
      });
      requestAnimationFrame(() => {
        const canvasEl = holder.querySelector("canvas");
        const dataUrl = canvasEl ? canvasEl.toDataURL("image/png") : holder.querySelector("img").src;
        document.body.removeChild(holder);
        resolve(dataUrl);
      });
    } catch (err) {
      document.body.removeChild(holder);
      reject(err);
    }
  });
}

// Khung chứng nhận dùng chung cho cả 3 hành trình + chứng nhận tổng — chỉ
// phần dòng phụ đề, dòng điểm/kết quả và nội dung mã QR là khác nhau theo
// hành trình (xem 3 hàm *CertParams bên dưới).
async function drawCertificateCanvas({ subtitleLine, scoreLine, verifyText, dateStr }) {
  await Promise.all([
    document.fonts.load("400 30px 'Be Vietnam Pro'"),
    document.fonts.load("500 32px 'Be Vietnam Pro'"),
    document.fonts.load("700 40px 'Be Vietnam Pro'"),
    document.fonts.load("800 70px 'Be Vietnam Pro'")
  ]);

  const W = 1754, H = 1240; // tỉ lệ A4 ngang
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FFF8EC";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#D9412E";
  ctx.fillRect(0, 0, W, 28);
  ctx.fillStyle = "#0E6B7A";
  ctx.fillRect(0, H - 28, W, 28);
  ctx.strokeStyle = "#E8A33D";
  ctx.lineWidth = 6;
  ctx.strokeRect(50, 60, W - 100, H - 150);

  ctx.textAlign = "center";

  ctx.fillStyle = "#A62D1E";
  ctx.font = "800 76px 'Be Vietnam Pro', sans-serif";
  ctx.fillText("CHỨNG NHẬN", W / 2, 190);

  ctx.fillStyle = "#26313A";
  ctx.font = "700 46px 'Be Vietnam Pro', sans-serif";
  ctx.fillText("ĐẠI SỨ VĂN HOÁ SỐ HẢI PHÒNG", W / 2, 250);

  ctx.font = "400 30px 'Be Vietnam Pro', sans-serif";
  ctx.fillText(subtitleLine, W / 2, 305);

  ctx.fillStyle = "#D9412E";
  ctx.font = "800 60px 'Be Vietnam Pro', sans-serif";
  ctx.fillText(currentUser.displayName || "Học sinh", W / 2, 400);

  ctx.fillStyle = "#26313A";
  ctx.font = "500 32px 'Be Vietnam Pro', sans-serif";
  ctx.fillText("Lớp " + (currentUser.className || "—") + "   ·   " + (currentUser.school || "—"), W / 2, 450);

  ctx.font = "700 36px 'Be Vietnam Pro', sans-serif";
  ctx.fillText(scoreLine, W / 2, 520);

  ctx.font = "400 26px 'Be Vietnam Pro', sans-serif";
  ctx.fillStyle = "#5b6570";
  ctx.fillText("Cấp ngày " + dateStr + " tại Hải Phòng", W / 2, 570);

  const qrDataUrl = await generateQrDataUrl(verifyText, 260);
  const qrImg = await loadImage(qrDataUrl);
  const qrSize = 220;
  ctx.drawImage(qrImg, W / 2 - qrSize / 2, H - 340, qrSize, qrSize);

  ctx.font = "400 20px 'Be Vietnam Pro', sans-serif";
  ctx.fillStyle = "#5b6570";
  ctx.fillText("Quét mã để xem thông tin xác thực", W / 2, H - 90);

  return canvas;
}

async function runCertificateGeneration(btn, buildParams, fileName) {
  if (!currentUser) return;
  const originalLabel = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Đang tạo chứng nhận...";
  try {
    const canvas = await drawCertificateCanvas(buildParams());
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    // Dùng JPEG chất lượng cao thay vì PNG để giảm dung lượng file PDF đáng kể
    // (ảnh nền đặc màu + chữ không cần trong suốt nên không mất chi tiết đáng kể).
    pdf.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, pageW, pageH);
    pdf.save(fileName);
  } catch (err) {
    console.error("Không tạo được chứng nhận:", err);
    alert("Không tạo được chứng nhận, vui lòng kiểm tra kết nối mạng và thử lại.");
  } finally {
    btn.disabled = false;
    btn.textContent = originalLabel;
  }
}

// Chuỗi xác thực ngắn gọn trong mỗi mã QR (sức chứa mã QR có giới hạn) — Ban
// giám khảo có thể đối chiếu UID này với dữ liệu thật trong Firestore khi cần.
function locationsCertParams() {
  const dateStr = new Date().toLocaleDateString("vi-VN");
  const rank = RANK_THRESHOLDS.find(r => progress.score >= r.min && progress.score <= r.max) || RANK_THRESHOLDS[0];
  return {
    subtitleLine: "Đã hoàn thành hành trình khám phá 10 địa danh lịch sử",
    scoreLine: "Tổng điểm: " + progress.score + " / " + MAX_SCORE + "   ·   Xếp loại: " + rank.label,
    verifyText: "HPCDS-LOC|" + currentUser.uid + "|" + progress.score + "-" + MAX_SCORE + "|" + dateStr,
    dateStr
  };
}
function festivalsCertParams() {
  const dateStr = new Date().toLocaleDateString("vi-VN");
  return {
    subtitleLine: "Đã hoàn thành hành trình khám phá 10 lễ hội văn hoá",
    scoreLine: "Đã khám phá đủ " + FESTIVALS.length + "/" + FESTIVALS.length + " lễ hội tiêu biểu Hải Phòng",
    verifyText: "HPCDS-FEST|" + currentUser.uid + "|" + FESTIVALS.length + "|" + dateStr,
    dateStr
  };
}
function combinedCertParams() {
  const dateStr = new Date().toLocaleDateString("vi-VN");
  return {
    subtitleLine: "Đã hoàn thành trọn vẹn cả 3 hành trình khám phá số",
    scoreLine: "Địa danh lịch sử  ·  Lễ hội văn hoá  ·  Food tour",
    verifyText: "HPCDS-ALL|" + currentUser.uid + "|" + dateStr,
    dateStr
  };
}

document.getElementById("btn-certificate").addEventListener("click", (e) =>
  runCertificateGeneration(e.currentTarget, locationsCertParams, "Chung-nhan-Dia-danh-lich-su.pdf"));
document.getElementById("btn-certificate-locations").addEventListener("click", (e) =>
  runCertificateGeneration(e.currentTarget, locationsCertParams, "Chung-nhan-Dia-danh-lich-su.pdf"));
document.getElementById("btn-certificate-festivals").addEventListener("click", (e) =>
  runCertificateGeneration(e.currentTarget, festivalsCertParams, "Chung-nhan-Le-hoi-van-hoa.pdf"));
document.getElementById("btn-certificate-combined").addEventListener("click", (e) =>
  runCertificateGeneration(e.currentTarget, combinedCertParams, "Chung-nhan-Cong-dan-so-Hai-Phong.pdf"));

function launchConfetti() {
  clearConfetti();
  const colors = ["#D9412E", "#E8A33D", "#0E6B7A", "#3C9F6B"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = 2.2 + Math.random() * 1.6 + "s";
    piece.style.opacity = String(0.7 + Math.random() * 0.3);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 4200);
  }
}

/* ---------------- 10b. BẢNG XẾP HẠNG ---------------- */
let leaderboardCache = null;

async function fetchLeaderboardRows() {
  const q = query(collection(db, "progress"), orderBy("score", "desc"), limit(50));
  const snap = await getDocs(q);
  const rows = [];
  snap.forEach((docSnap) => rows.push({ uid: docSnap.id, ...docSnap.data() }));
  return rows;
}

async function renderLeaderboard() {
  const listEl = document.getElementById("leaderboard-list");
  listEl.innerHTML = '<p class="leaderboard-loading">Đang tải...</p>';
  try {
    leaderboardCache = await fetchLeaderboardRows();
  } catch (err) {
    console.error("Không tải được bảng xếp hạng:", err);
    listEl.innerHTML = '<p class="leaderboard-loading">Không tải được bảng xếp hạng, thử lại sau.</p>';
    return;
  }
  renderLeaderboardList();
}

function renderLeaderboardList() {
  const listEl = document.getElementById("leaderboard-list");
  const filterVal = document.getElementById("leaderboard-filter").value.trim().toLowerCase();
  let rows = leaderboardCache || [];
  if (filterVal) {
    rows = rows.filter((r) =>
      (r.className || "").toLowerCase().includes(filterVal) ||
      (r.school || "").toLowerCase().includes(filterVal)
    );
  }
  if (rows.length === 0) {
    listEl.innerHTML = '<p class="leaderboard-loading">Chưa có dữ liệu phù hợp.</p>';
    return;
  }
  listEl.innerHTML = rows.map((r, i) => {
    const isMe = currentUser && r.uid === currentUser.uid;
    const stopsDone = Array.isArray(r.completedIds) ? r.completedIds.length : 0;
    return '<div class="leaderboard-row' + (isMe ? " is-me" : "") + '">' +
      '<span class="lb-rank">' + (i + 1) + '</span>' +
      '<img class="lb-avatar" src="' + escapeHtml(r.photoURL || "") + '" alt="">' +
      '<span class="lb-name">' + escapeHtml(r.displayName || "Học sinh") +
        '<br><small>' + escapeHtml(r.className || "") + (r.school ? " — " + escapeHtml(r.school) : "") + '</small></span>' +
      '<span class="lb-score">' + (r.score || 0) + ' đ · ' + stopsDone + '/' + TOTAL_STOPS + '</span>' +
    '</div>';
  }).join("");
}

document.getElementById("leaderboard-filter").addEventListener("input", renderLeaderboardList);

// 2 phần: xếp hạng theo hành trình khám phá (đầy đủ) / theo cuộc thi (giữ chỗ,
// sẽ cập nhật khi Cuộc thi "Công dân số Hải Phòng" diễn ra).
document.querySelectorAll("#screen-leaderboard .info-view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.lbView;
    document.querySelectorAll("#screen-leaderboard .info-view-btn").forEach(b => b.classList.toggle("is-active", b === btn));
    document.getElementById("lb-view-explore").hidden = view !== "explore";
    document.getElementById("lb-view-contest").hidden = view !== "contest";
  });
});

/* ---------------- 10c. TRANG CÁ NHÂN ---------------- */
// Tủ tem chia theo từng hành trình số (Địa danh lịch sử / Lễ hội văn hoá /
// Food tour — chưa ra mắt) — mỗi hành trình có tem + chứng nhận riêng, cộng
// thêm 1 chứng nhận tổng khi hoàn thành đủ cả 3. Bấm vào tem đã nhận sẽ mở
// lại đúng ảnh check-in + cảm xúc đã ghi tại điểm đó (progress.checkins).
function findCheckin(id, type) {
  for (let i = progress.checkins.length - 1; i >= 0; i--) {
    const c = progress.checkins[i];
    if (c.locationId === id && (c.type || "location") === type) return c;
  }
  return null;
}

function renderStampAlbum(containerEl, items, completedIds, type, iconFor) {
  containerEl.innerHTML = items.map((item) => {
    const earned = completedIds.includes(item.id);
    const icon = earned ? (iconFor(item) || "") : '<div class="stamp-slot-locked">🔒</div>';
    const hint = earned ? '<span class="stamp-slot-view-hint">Xem lại</span>' : "";
    return '<div class="stamp-slot' + (earned ? " is-earned" : "") + '" data-id="' + escapeHtml(item.id) + '" data-type="' + type + '">' +
      icon + "<span>" + escapeHtml(item.name) + "</span>" + hint + "</div>";
  }).join("");

  containerEl.querySelectorAll(".stamp-slot.is-earned").forEach((slotEl) => {
    slotEl.addEventListener("click", () => openCheckinViewModal(slotEl.dataset.id, slotEl.dataset.type));
  });
}

function renderProfile() {
  if (!currentUser) return;

  document.getElementById("profile-avatar-img").src = currentUser.photoURL || "";
  document.getElementById("profile-display-name").textContent = currentUser.displayName || "Học sinh";
  document.getElementById("profile-meta").textContent =
    (currentUser.className || "") + (currentUser.school ? " — " + currentUser.school : "");

  document.getElementById("profile-stat-score").textContent = progress.score;
  document.getElementById("profile-stat-stops").textContent = progress.completedIds.length + "/" + TOTAL_STOPS;
  document.getElementById("profile-stat-best").textContent = progress.bestScore;

  const locationsDone = progress.completedIds.length >= TOTAL_STOPS;
  const festivalsDone = progress.festivalCompletedIds.length >= FESTIVALS.length;

  document.getElementById("stamp-count-locations").textContent = progress.completedIds.length + "/" + TOTAL_STOPS;
  renderStampAlbum(document.getElementById("stamp-album-locations"), LOCATIONS, progress.completedIds, "location", (loc) => ICONS[loc.id]);
  const certLocBtn = document.getElementById("btn-certificate-locations");
  certLocBtn.disabled = !locationsDone;
  certLocBtn.title = locationsDone ? "" : "Hoàn thành đủ 10/10 địa danh lịch sử để mở khoá";

  document.getElementById("stamp-count-festivals").textContent = progress.festivalCompletedIds.length + "/" + FESTIVALS.length;
  renderStampAlbum(document.getElementById("stamp-album-festivals"), FESTIVALS, progress.festivalCompletedIds, "festival", (fest) => FESTIVAL_ICONS[fest.id] || FESTIVAL_ICON);
  const certFestBtn = document.getElementById("btn-certificate-festivals");
  certFestBtn.disabled = !festivalsDone;
  certFestBtn.title = festivalsDone ? "" : "Hoàn thành đủ " + FESTIVALS.length + "/" + FESTIVALS.length + " lễ hội văn hoá để mở khoá";

  // Food tour chưa xây dựng nên chứng nhận tổng luôn khoá — sẽ tự mở khi hành
  // trình thứ 3 ra mắt và có điều kiện hoàn thành tương ứng.
  const certAllBtn = document.getElementById("btn-certificate-combined");
  certAllBtn.disabled = true;
  certAllBtn.title = "Hoàn thành cả 3 hành trình để mở khoá — Food tour sắp ra mắt";
}

/* -- Modal xem lại ảnh check-in + cảm xúc đã ghi tại 1 tem -- */
const modalCheckinView = document.getElementById("modal-checkin-view");
function svgToImgSrc(svg) {
  // Các chuỗi SVG trong ICONS/FESTIVAL_ICON vốn chỉ dùng để chèn trực tiếp
  // qua innerHTML (không cần xmlns) — nhưng để trình duyệt render được khi
  // dùng làm src của thẻ <img> (data URI), SVG gốc bắt buộc phải khai báo
  // xmlns, nếu không ảnh sẽ vỡ (lỗi đã gặp khi test).
  const withXmlns = svg.includes("xmlns=") ? svg : svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
  return "data:image/svg+xml," + encodeURIComponent(withXmlns);
}
function openCheckinViewModal(id, type) {
  const items = type === "festival" ? FESTIVALS : LOCATIONS;
  const item = items.find(i => i.id === id);
  if (!item) return;
  const checkin = findCheckin(id, type);

  // Không có ảnh tự up thì dùng chính hình minh hoạ của tem địa danh/lễ hội
  // đó làm ảnh đại diện thay vì để trống.
  const photoEl = document.getElementById("checkin-view-photo");
  if (checkin && checkin.photo) {
    photoEl.src = checkin.photo;
    photoEl.alt = "Ảnh check-in tại " + item.name;
  } else {
    const fallbackIcon = type === "location" ? (ICONS[item.id] || FESTIVAL_ICON) : (FESTIVAL_ICONS[item.id] || FESTIVAL_ICON);
    photoEl.src = svgToImgSrc(fallbackIcon);
    photoEl.alt = "Biểu tượng tem " + item.name;
  }
  document.getElementById("checkin-view-emoji").textContent = (checkin && checkin.emoji) || "";
  document.getElementById("checkin-view-title").textContent = item.name;
  document.getElementById("checkin-view-meta").textContent = checkin
    ? "Check-in ngày " + new Date(checkin.ts).toLocaleDateString("vi-VN")
    : (type === "festival" ? "Đã hoàn thành thử thách nhanh" : "Đã hoàn thành điểm dừng này");
  document.getElementById("checkin-view-note").textContent = checkin && checkin.note
    ? "“" + checkin.note + "”"
    : "Bạn chưa để lại cảm xúc check-in nào tại điểm này.";
  document.getElementById("checkin-view-user").textContent =
    "— " + (currentUser ? (currentUser.displayName || "Học sinh") : "");

  modalCheckinView.hidden = false;
}
document.getElementById("checkin-view-close").addEventListener("click", () => { modalCheckinView.hidden = true; });
modalCheckinView.addEventListener("click", (e) => { if (e.target === modalCheckinView) modalCheckinView.hidden = true; });

/* ---------------- 10d. MODAL THÔNG TIN LỄ HỘI + QUIZ LỄ HỘI ----------------
   Nhẹ hơn modal địa danh: không có tab Lịch sử/Văn hoá, không có chat AI,
   quiz chỉ có dạng trắc nghiệm và KHÔNG lưu điểm/tem vào tiến trình chung —
   chỉ để tìm hiểu & thử thách vui. Sẽ hợp nhất vào hệ tem chung ở Tủ thành tích. */
const modalFestival = document.getElementById("modal-festival");
let currentFestival = null;
let festivalChatMessages = [];
let festivalChatTurnIndex = 0;

// Carousel ảnh cho lễ hội — cùng cơ chế với renderInfoMedia() của địa danh
// (mũi tên ‹ › + chấm chỉ báo + tự động chạy), nhưng đơn giản hơn vì festival
// chỉ có 1 mảng photos phẳng (không tách history/culture). Lễ hội nào chưa có
// ảnh riêng (photos: []) thì tạm dùng chung 1 ảnh giữ chỗ — xem festivals/README.md.
let currentFestivalPhotoIndex = 0;
let currentFestivalPhotos = [];
let festivalPhotoAutoTimer = null;

function stopFestivalPhotoAutoplay() {
  if (festivalPhotoAutoTimer) {
    clearInterval(festivalPhotoAutoTimer);
    festivalPhotoAutoTimer = null;
  }
}

function startFestivalPhotoAutoplay() {
  stopFestivalPhotoAutoplay();
  if (currentFestivalPhotos.length <= 1) return;
  festivalPhotoAutoTimer = setInterval(() => stepFestivalPhoto(1), PHOTO_AUTOPLAY_MS);
}

function renderFestivalMedia(festival) {
  const mediaEl = document.getElementById("festival-media");
  stopFestivalPhotoAutoplay();

  // Chưa có ảnh thật: nếu lễ hội có icon minh hoạ riêng (FESTIVAL_ICONS) thì
  // hiện icon đúng chủ đề đó thay vì ảnh giữ chỗ chung chung.
  if (!(festival.photos && festival.photos.length) && FESTIVAL_ICONS[festival.id]) {
    currentFestivalPhotos = [];
    mediaEl.classList.remove("has-carousel");
    mediaEl.innerHTML = FESTIVAL_ICONS[festival.id];
    return;
  }

  currentFestivalPhotos = (festival.photos && festival.photos.length) ? festival.photos.slice() : ["assets/placeholder.jfif"];
  currentFestivalPhotoIndex = 0;
  mediaEl.classList.add("has-carousel");
  mediaEl.innerHTML =
    '<img class="media-photo" id="festival-media-photo" alt="">' +
    (currentFestivalPhotos.length > 1
      ? '<button type="button" class="media-nav-btn media-nav-prev" id="festival-media-prev" aria-label="Ảnh trước">‹</button>' +
        '<button type="button" class="media-nav-btn media-nav-next" id="festival-media-next" aria-label="Ảnh sau">›</button>' +
        '<div class="media-dots" id="festival-media-dots"></div>'
      : "");
  showFestivalPhotoAt(festival, 0);

  if (currentFestivalPhotos.length > 1) {
    document.getElementById("festival-media-prev").addEventListener("click", () => { stepFestivalPhoto(-1); startFestivalPhotoAutoplay(); });
    document.getElementById("festival-media-next").addEventListener("click", () => { stepFestivalPhoto(1); startFestivalPhotoAutoplay(); });
  }
  startFestivalPhotoAutoplay();
}

function showFestivalPhotoAt(festival, index) {
  if (!currentFestivalPhotos.length) return;
  currentFestivalPhotoIndex = (index + currentFestivalPhotos.length) % currentFestivalPhotos.length;
  const img = document.getElementById("festival-media-photo");
  if (!img) return;
  img.src = currentFestivalPhotos[currentFestivalPhotoIndex];
  img.alt = festival.name + " (" + (currentFestivalPhotoIndex + 1) + "/" + currentFestivalPhotos.length + ")";
  img.onerror = () => {
    // Ảnh hỏng: bỏ khỏi danh sách rồi thử ảnh kế tiếp; hết sạch thì dùng SVG dự phòng.
    currentFestivalPhotos.splice(currentFestivalPhotoIndex, 1);
    if (!currentFestivalPhotos.length) {
      document.getElementById("festival-media").classList.remove("has-carousel");
      document.getElementById("festival-media").innerHTML = FESTIVAL_ICON;
      return;
    }
    renderFestivalMedia(festival);
  };

  const dotsEl = document.getElementById("festival-media-dots");
  if (dotsEl) {
    dotsEl.innerHTML = currentFestivalPhotos
      .map((_, i) => '<span class="media-dot' + (i === currentFestivalPhotoIndex ? " is-active" : "") + '"></span>')
      .join("");
  }
}

function stepFestivalPhoto(delta) {
  showFestivalPhotoAt(currentFestival, currentFestivalPhotoIndex + delta);
}

function openFestivalModal(festivalId) {
  currentFestival = FESTIVALS.find(f => f.id === festivalId);
  if (!currentFestival) return;

  renderFestivalMedia(currentFestival);

  document.getElementById("festival-title").textContent = currentFestival.name;
  document.getElementById("festival-place").textContent = currentFestival.place;
  document.getElementById("festival-timing").textContent = currentFestival.timing;
  const pointsHtml = currentFestival.narration.points.map(p => "<li>" + escapeHtml(p) + "</li>").join("");
  document.getElementById("festival-text").innerHTML =
    "<p>" + escapeHtml(currentFestival.narration.intro) + "</p><ul>" + pointsHtml + "</ul>";

  festivalChatMessages = [];
  festivalChatTurnIndex = 0;
  renderFestivalChatThread();
  document.querySelectorAll("#modal-festival .info-view-btn").forEach(b => b.classList.toggle("is-active", b.dataset.view === "narration"));
  document.getElementById("festival-view-narration").classList.remove("is-hidden");
  document.getElementById("festival-view-chat").classList.add("is-hidden");

  modalFestival.hidden = false;
}

function closeFestivalModal() {
  modalFestival.hidden = true;
  stopFestivalPhotoAutoplay();
  window.speechSynthesis && window.speechSynthesis.cancel();
  resetFestivalSpeakButton();
}

document.getElementById("festival-close").addEventListener("click", closeFestivalModal);
modalFestival.addEventListener("click", (e) => { if (e.target === modalFestival) closeFestivalModal(); });

document.querySelectorAll("#modal-festival .info-view-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const view = btn.dataset.view;
    document.querySelectorAll("#modal-festival .info-view-btn").forEach(b => b.classList.toggle("is-active", b === btn));
    document.getElementById("festival-view-narration").classList.toggle("is-hidden", view !== "narration");
    document.getElementById("festival-view-chat").classList.toggle("is-hidden", view !== "chat");
    window.speechSynthesis && window.speechSynthesis.cancel();
    resetFestivalSpeakButton();
  });
});

function renderFestivalChatThread() {
  const thread = document.getElementById("festival-chat-thread");
  const optionsEl = document.getElementById("festival-chat-options");
  const chatScript = (currentFestival && currentFestival.aiChat) || [];

  if (festivalChatMessages.length === 0 && chatScript.length > 0) {
    festivalChatMessages.push({ who: "bot", text: chatScript[0].ask });
  }

  thread.innerHTML = festivalChatMessages
    .map(m => '<div class="chat-bubble chat-bubble-' + m.who + '">' + m.text + "</div>")
    .join("");
  thread.scrollTop = thread.scrollHeight;

  optionsEl.innerHTML = "";
  const turn = chatScript[festivalChatTurnIndex];
  if (!turn) return;

  turn.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chat-quick-reply";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => {
      festivalChatMessages.push({ who: "user", text: opt.label });
      festivalChatMessages.push({ who: "bot", text: opt.reply });
      festivalChatTurnIndex += 1;
      const nextTurn = chatScript[festivalChatTurnIndex];
      festivalChatMessages.push({
        who: "bot",
        text: nextTurn ? nextTurn.ask : "Giờ thì mình cùng thử thách nhanh nhé! 🎉"
      });
      renderFestivalChatThread();
    });
    optionsEl.appendChild(btn);
  });
}

const festivalSpeakBtn = document.getElementById("festival-speak");
function resetFestivalSpeakButton() {
  festivalSpeakBtn.textContent = "🔊 Nghe phần này";
  festivalSpeakBtn.classList.remove("is-speaking");
}
festivalSpeakBtn.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) return;
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    resetFestivalSpeakButton();
    return;
  }
  if (!currentFestival) return;
  const utter = new SpeechSynthesisUtterance(
    currentFestival.narration.intro + ". " + currentFestival.narration.points.join(". ")
  );
  utter.lang = "vi-VN";
  utter.onend = resetFestivalSpeakButton;
  utter.onerror = resetFestivalSpeakButton;
  window.speechSynthesis.speak(utter);
  festivalSpeakBtn.textContent = "⏸ Dừng đọc";
  festivalSpeakBtn.classList.add("is-speaking");
});

/* -- Quiz nhanh cho lễ hội (chỉ trắc nghiệm, không lưu điểm) -- */
const modalFestivalQuiz = document.getElementById("modal-festival-quiz");
const festivalQuizDots = document.getElementById("festival-quiz-dots");
const festivalQuizOptions = document.getElementById("festival-quiz-options");
const festivalQuizFeedback = document.getElementById("festival-quiz-feedback");
const festivalQuizNextBtn = document.getElementById("festival-quiz-next");
const festivalQuizProgressLabel = document.getElementById("festival-quiz-progress-label");

let festivalQuizQuestions = [];
let festivalQuizIndex = 0;
let festivalQuizCorrectCount = 0;
let festivalCurrentQ = null;
let festivalQuizAnswered = false;

document.getElementById("festival-start-quiz").addEventListener("click", () => {
  if (!currentFestival) return;
  modalFestival.hidden = true;
  window.speechSynthesis && window.speechSynthesis.cancel();
  resetFestivalSpeakButton();

  festivalQuizQuestions = pickRandomQuestions(currentFestival.quizBank, QUESTIONS_PER_VISIT);
  festivalQuizIndex = 0;
  festivalQuizCorrectCount = 0;
  document.getElementById("festival-quiz-name").textContent = currentFestival.name;
  renderFestivalQuizQuestion();
  modalFestivalQuiz.hidden = false;
});

function renderFestivalQuizDots() {
  festivalQuizDots.innerHTML = "";
  festivalQuizQuestions.forEach((_, i) => {
    const dot = document.createElement("span");
    if (i < festivalQuizIndex) dot.className = "dot-done";
    else if (i === festivalQuizIndex) dot.className = "dot-current";
    festivalQuizDots.appendChild(dot);
  });
}

function renderFestivalQuizQuestion() {
  festivalQuizAnswered = false;
  festivalCurrentQ = festivalQuizQuestions[festivalQuizIndex];

  festivalQuizProgressLabel.textContent = "Câu " + (festivalQuizIndex + 1) + "/" + festivalQuizQuestions.length;
  document.getElementById("festival-quiz-score").textContent = festivalQuizCorrectCount + "/" + festivalQuizQuestions.length + " đúng";
  renderFestivalQuizDots();

  festivalQuizFeedback.hidden = true;
  festivalQuizFeedback.className = "quiz-feedback";
  festivalQuizNextBtn.hidden = true;

  document.getElementById("festival-quiz-question").textContent = festivalCurrentQ.question;
  festivalQuizOptions.innerHTML = "";
  festivalCurrentQ.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", () => checkFestivalAnswer(i));
    festivalQuizOptions.appendChild(btn);
  });
}

function checkFestivalAnswer(selectedIndex) {
  if (festivalQuizAnswered) return;
  festivalQuizAnswered = true;

  festivalQuizOptions.querySelectorAll(".quiz-option").forEach((el, i) => {
    el.disabled = true;
    if (i === festivalCurrentQ.correctIndex) el.classList.add("correct");
    else if (i === selectedIndex) el.classList.add("wrong");
  });

  const isCorrect = selectedIndex === festivalCurrentQ.correctIndex;
  if (isCorrect) festivalQuizCorrectCount += 1;

  festivalQuizFeedback.hidden = false;
  festivalQuizFeedback.className = "quiz-feedback " + (isCorrect ? "is-correct" : "is-wrong");
  festivalQuizFeedback.textContent = isCorrect
    ? "✓ Chính xác!"
    : "✗ Chưa đúng. Đáp án đúng là: " + festivalCurrentQ.options[festivalCurrentQ.correctIndex];
  document.getElementById("festival-quiz-score").textContent = festivalQuizCorrectCount + "/" + festivalQuizQuestions.length + " đúng";

  const isLastQuestion = festivalQuizIndex >= festivalQuizQuestions.length - 1;
  festivalQuizNextBtn.hidden = false;
  festivalQuizNextBtn.textContent = isLastQuestion ? "Hoàn thành →" : "Câu tiếp theo →";
}

festivalQuizNextBtn.addEventListener("click", () => {
  const isLastQuestion = festivalQuizIndex >= festivalQuizQuestions.length - 1;
  if (!isLastQuestion) {
    festivalQuizIndex += 1;
    renderFestivalQuizQuestion();
    return;
  }

  // Hoàn tất thử thách nhanh của lễ hội này — chốt vào tiến trình chung
  // (giống hành trình Địa danh lịch sử) rồi mở màn check-in để nhận tem.
  if (!progress.festivalCompletedIds.includes(currentFestival.id)) {
    progress.festivalCompletedIds.push(currentFestival.id);
  }
  saveProgress();

  closeFestivalQuizModal();
  openStampModal(currentFestival, "festival");
});

function closeFestivalQuizModal() {
  modalFestivalQuiz.hidden = true;
}
document.getElementById("festival-quiz-close").addEventListener("click", closeFestivalQuizModal);
modalFestivalQuiz.addEventListener("click", (e) => { if (e.target === modalFestivalQuiz) closeFestivalQuizModal(); });

/* ---------------- 11. MODAL HƯỚNG DẪN ---------------- */
const modalGuide = document.getElementById("modal-guide");
function openGuide() { modalGuide.hidden = false; }
function closeGuide() { modalGuide.hidden = true; }

document.getElementById("btn-guide-hero").addEventListener("click", openGuide);
document.getElementById("btn-guide-nav").addEventListener("click", openGuide);
document.getElementById("guide-close").addEventListener("click", closeGuide);
document.getElementById("guide-ok").addEventListener("click", closeGuide);
modalGuide.addEventListener("click", (e) => { if (e.target === modalGuide) closeGuide(); });

/* ---------------- 12. PHÍM ESC ĐÓNG MODAL ---------------- */
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!modalGuide.hidden) closeGuide();
  else if (!modalQuiz.hidden) closeQuizModal();
  else if (!modalInfo.hidden) closeInfoModal();
  else if (!modalFestivalQuiz.hidden) closeFestivalQuizModal();
  else if (!modalFestival.hidden) closeFestivalModal();
  else if (!modalCheckinView.hidden) modalCheckinView.hidden = true;
});
