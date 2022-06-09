import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  dangNhap = (thongTinDangNhap) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };
  layThongTinNguoiDung = () => {
    const isTwosToken = true;
    const url = `/api/QuanLyNguoiDung/ThongTinTaiKhoan`;
    return this.post(url, {}, isTwosToken);
  };
}
export const quanLyNguoiDungService = new QuanLyNguoiDungService();
