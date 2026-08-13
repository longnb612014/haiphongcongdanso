/* ============================================================
   Cấu hình Firebase — dự án "haiphongcongdanso"
   Dùng SDK dạng module (ES modules) tải qua CDN, không cần cài npm.
   ============================================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwXI4O8A5tEh08bbYTDjmsjk87kTRweyQ",
  authDomain: "haiphongcongdanso.firebaseapp.com",
  projectId: "haiphongcongdanso",
  storageBucket: "haiphongcongdanso.firebasestorage.app",
  messagingSenderId: "468725633888",
  appId: "1:468725633888:web:dbe245d1da005a41598405"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  db,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs
};
