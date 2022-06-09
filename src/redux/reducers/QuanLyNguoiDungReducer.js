import { TOKEN_CYBER, USER_LOGIN } from "../../util/setting";
import {
  QUAN_LY_NGUOI_DUNG_DN,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  userData: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case QUAN_LY_NGUOI_DUNG_DN: {
      const { thongTinDangNhap } = action;

      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN_CYBER, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.userData = action.userData;
      return { ...state };
    }
    default: {
      break;
    }
  }
  return { ...state };
};
