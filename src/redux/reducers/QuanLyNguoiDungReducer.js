import { TOKEN_CYBER, USER_LOGIN } from "../../util/setting";
import { DANG_NHAP, QUAN_LY_NGUOI_DUNG_DN } from "../types/QuanLyNguoiDungType";

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
      const { thongtinDangNhap } = action;

      localStorage.setItem(USER_LOGIN, JSON.stringify(thongtinDangNhap));
      localStorage.setItem(TOKEN_CYBER, thongtinDangNhap.accessToken);
      return { ...state, userLogin: thongtinDangNhap };
    }
    case DANG_NHAP: {
      state.userData = action.userData;
      return { ...state };
    }
    default: {
      break;
    }
  }
  return { ...state };
};
