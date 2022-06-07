import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP, QUAN_LY_NGUOI_DUNG_DN } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongtinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongtinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: QUAN_LY_NGUOI_DUNG_DN,
          thongtinDangNhap: result.data.content,
        });
        //Chuyển hướng đăng nhập về trang trước đo
        history.back();
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP,
          userData: result.data.content,
        });
      }
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};
