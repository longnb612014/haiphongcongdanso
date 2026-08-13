// Gộp tất cả lễ hội (mỗi lễ hội 1 file trong thư mục này) thành 1 danh sách
// FESTIVALS duy nhất cho bản đồ "Lễ hội văn hoá" trong mục Khám phá.
//
// ⚠️ Nội dung 10 lễ hội trong thư mục này do AI soạn thảo theo yêu cầu — cần
// người phụ trách kiểm tra lại độ chính xác (đặc biệt ngày âm lịch và toạ độ)
// trước khi công bố chính thức, giống như đã làm với ảnh ở locations/.
//
// Muốn thêm lễ hội mới: copy 1 file .js có sẵn trong thư mục này, đổi nội
// dung, rồi thêm 2 dòng import/export bên dưới — không cần sửa file nào khác.

import choiTrauDoSon from "./choi-trau-do-son.js";
import hoaPhuongDo from "./hoa-phuong-do.js";
import minhThe from "./minh-the.js";
import vatCauKimSon from "./vat-cau-kim-son.js";
import leHoiDenNghe from "./le-hoi-den-nghe.js";
import leHoiTuLuongXam from "./le-hoi-tu-luong-xam.js";
import leHoiDinhHangKenh from "./le-hoi-dinh-hang-kenh.js";
import leHoiNuiVoi from "./le-hoi-nui-voi.js";
import cauNguCatBa from "./cau-ngu-cat-ba.js";
import lienHoanDuLichDoSon from "./lien-hoan-du-lich-do-son.js";

export const FESTIVALS = [
  choiTrauDoSon,
  hoaPhuongDo,
  minhThe,
  vatCauKimSon,
  leHoiDenNghe,
  leHoiTuLuongXam,
  leHoiDinhHangKenh,
  leHoiNuiVoi,
  cauNguCatBa,
  lienHoanDuLichDoSon
];
