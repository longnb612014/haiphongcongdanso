# Thêm địa danh mới — không cần biết lập trình

Mỗi địa danh là **1 file** trong thư mục này (`locations/`). Muốn thêm địa danh mới, làm theo 3 bước sau, không cần đụng tới file nào khác ngoài những file được nêu.

## Bước 1 — Chuẩn bị ảnh

Tạo 1 thư mục ảnh mới tại `locations/images/<id-địa-danh>/` (ví dụ `locations/images/thap-tuong-dai/`), bỏ ảnh thật vào đó, đặt tên `history-1.jfif`, `history-2.jfif`, ... (định dạng jfif/jpg/jpeg/png đều được).

`<id-địa-danh>` là một chuỗi viết thường, không dấu, cách nhau bằng gạch ngang — ví dụ `thap-tuong-dai`, `cho-sat`. Đây cũng chính là tên file ở bước 2.

## Bước 2 — Tạo file dữ liệu

1. Copy 1 file bất kỳ trong thư mục này (ví dụ `den-nghe.js`) và đổi tên thành `<id-địa-danh>.js` (ví dụ `thap-tuong-dai.js`).
2. Mở file vừa copy, sửa lại từng phần theo mẫu bên dưới (giữ nguyên cấu trúc dấu ngoặc `{ }`, `[ ]`, chỉ sửa phần chữ trong dấu `"..."`):

```js
export default {
  id: "thap-tuong-dai",              // trùng với tên file và tên thư mục ảnh
  name: "Tên hiển thị của địa danh",
  category: "Lịch sử",               // Lịch sử / Văn hoá / Địa lý
  place: "Quận/huyện, Hải Phòng",     // hiện trong hộp nhỏ khi bấm vào địa danh trên bản đồ
  coords: { lat: 20.0000, lng: 106.0000 }, // toạ độ GPS (chuột phải trên Google Maps để lấy)

  photos: {
    history: [
      "locations/images/thap-tuong-dai/history-1.jfif",
      "locations/images/thap-tuong-dai/history-2.jfif"
    ],
    culture: []   // để trống nếu chưa có ảnh riêng cho phần Văn hoá
  },

  narration: {
    history: {
      intro: "Đoạn giới thiệu chung, 1-2 câu.",
      points: [
        "Ý 1.",
        "Ý 2.",
        "Ý 3."
      ]
    },
    culture: {
      intro: "Đoạn giới thiệu về khía cạnh văn hoá.",
      points: ["Ý 1.", "Ý 2.", "Ý 3."]
    }
  },

  aiChat: [
    {
      ask: "Câu hỏi mở đầu trò chuyện với hướng dẫn viên ảo.",
      options: [
        { label: "Lựa chọn 1", reply: "Câu trả lời tương ứng." },
        { label: "Lựa chọn 2", reply: "Câu trả lời tương ứng." }
      ]
    }
  ],

  quizBank: [
    { type: "mcq", question: "Câu hỏi trắc nghiệm?", options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], correctIndex: 0 },
    { type: "blur", question: "Câu hỏi đoán ảnh mờ?", options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], correctIndex: 0 }
  ]
};
```

Lưu ý: `quizBank` nên có **ít nhất 5 câu** (mỗi lượt chơi lấy ngẫu nhiên 5 câu), `correctIndex` là vị trí đáp án đúng trong mảng `options` (đếm từ 0).

## Bước 3 — Đăng ký địa danh vào danh sách

Mở file `locations/index.js`, thêm 2 dòng theo đúng mẫu đã có (copy 1 dòng import + 1 dòng trong mảng, đổi tên):

```js
import thapTuongDai from "./thap-tuong-dai.js";   // thêm dòng import

export const LOCATIONS = [
  bachDang,
  denNghe,
  // ... các địa danh khác
  thapTuongDai   // thêm vào cuối danh sách
];
```

Lưu lại, tải lại trang (Ctrl+Shift+R) — địa danh mới sẽ tự động xuất hiện trên bản đồ, không cần sửa gì ở `script.js`.
