import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
  // constructor(props) {
  //   super(props);
  // }
  layChiTietPhongVe = (maLichChieu) => {
    const url = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    // maLichChieu lấy từ url
    return this.get(url);
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    const isTwosToken = true;
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe, isTwosToken);
  };
}
export const quanLyDatVeService = new QuanLyDatVeService();
