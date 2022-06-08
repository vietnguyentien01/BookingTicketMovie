import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor() {
    super();
  }
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    const isTwosToken = true;
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, isTwosToken);
  };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
