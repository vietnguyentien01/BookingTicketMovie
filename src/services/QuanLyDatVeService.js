import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
  constructor() {
    super();
  }
  layChiTietPhongVe = (maLichChieu) => {
    return this.get(
      `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };

  datVe = (thongTinDatVe = new ThongTinDatVe()) => {
    const isTwosToken = true;
    return this.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe, isTwosToken);
  };
}
export const quanLyDatVeService = new QuanLyDatVeService();
