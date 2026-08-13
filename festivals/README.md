# Thêm lễ hội mới / bổ sung ảnh thật — không cần biết lập trình

Mỗi lễ hội là **1 file** trong thư mục này (`festivals/`), y hệt cách tổ chức của `locations/` (xem `locations/README.md` để hiểu đầy đủ 3 bước thêm mới). Trang này chỉ nêu phần khác biệt: ảnh.

## Bổ sung ảnh thật cho 1 lễ hội đã có

1. Mở thư mục `festivals/images/<id-lễ-hội>/` (ví dụ `festivals/images/choi-trau-do-son/`) — đã có sẵn cho cả 10 lễ hội, hiện đang trống.
2. Bỏ ảnh thật vào đó, đặt tên `history-1.jfif`, `history-2.jfif`, ... (jfif/jpg/jpeg/png đều được).
3. Mở file `festivals/<id-lễ-hội>.js`, sửa dòng `photos: []` thành:

```js
photos: [
  "festivals/images/choi-trau-do-son/history-1.jfif",
  "festivals/images/choi-trau-do-son/history-2.jfif"
],
```

Lưu lại, tải lại trang (Ctrl+Shift+R) — ảnh thật sẽ tự thay cho ảnh giữ chỗ.

## Vì sao đang thấy 1 ảnh chung cho tất cả lễ hội?

Lễ hội nào có `photos: []` (chưa có ảnh riêng) sẽ tạm dùng chung 1 ảnh giữ chỗ ở `assets/placeholder.jfif` khi mở cửa sổ thuyết minh, thay vì để trống — xem hàm `openFestivalModal` trong `script.js`. Khi bạn bổ sung ảnh riêng theo hướng dẫn trên, lễ hội đó sẽ tự động dùng ảnh thật thay vì ảnh giữ chỗ.

## Thêm lễ hội hoàn toàn mới

Làm đúng 3 bước như `locations/README.md`, chỉ khác: copy 1 file trong `festivals/` (thay vì `locations/`), đăng ký vào `festivals/index.js` (mảng `FESTIVALS`, thay vì `locations/index.js`), và `photos` ở đây là **1 mảng phẳng** (không chia `history`/`culture` như địa danh lịch sử).
