import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispacth) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

      console.log("chiTiet", result.data.content);
      if (result.status === 200) {
        dispacth({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  return async (dispacth) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      console.log("resultDatVe", result.data.content);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};
