import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  QUAN_LY_NGUOI_DUNG_DN,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongtinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongtinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: QUAN_LY_NGUOI_DUNG_DN,
          thongTinDangNhap: result.data.content,
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
          type: SET_THONG_TIN_NGUOI_DUNG,
          userData: result.data.content,
        });
      }
      console.log("thongND", result);
    } catch (error) {
      console.log(error);
    }
  };
};
