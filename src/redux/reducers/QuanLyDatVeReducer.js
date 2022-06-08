import { DAT_GHE, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType";
import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachGheDangDat: [],
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;
      return { ...state };
    }
    case DAT_GHE: {
      //Cập nhật danh sách ghế đang đặt
      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.gheDuocChon.maGhe
      );

      if (index !== -1) {
        // Nếu tìm  thấy ghế được chọn trong mảng có nghĩa là trước đó đã click vào rồi => xóa đi
        danhSachGheCapNhat.slice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }

      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }
    default: {
      return { ...state };
    }
  }
};
