// Gộp tất cả địa danh (mỗi địa danh 1 file trong thư mục này) thành 1 danh
// sách LOCATIONS duy nhất cho toàn bộ ứng dụng.
//
// MUỐN THÊM ĐỊA DANH MỚI? Xem hướng dẫn chi tiết trong locations/README.md —
// chỉ cần 2 bước: (1) copy 1 file .js có sẵn, đổi nội dung; (2) thêm 2 dòng
// import/export bên dưới. Không cần sửa bất kỳ file nào khác.

import bachDang from "./bach-dang.js";
import denNghe from "./den-nghe.js";
import benK15 from "./ben-k15.js";
import nhaHatLon from "./nha-hat-lon.js";
import catBa from "./cat-ba.js";
import doSon from "./do-son.js";
import dinhHangKenh from "./dinh-hang-kenh.js";
import tuLuongXam from "./tu-luong-xam.js";
import nuiVoi from "./nui-voi.js";
import hoTamBac from "./ho-tam-bac.js";

export const LOCATIONS = [
  bachDang,
  denNghe,
  benK15,
  nhaHatLon,
  catBa,
  doSon,
  dinhHangKenh,
  tuLuongXam,
  nuiVoi,
  hoTamBac
];
