import {
  SET_DANH_SACH_PHIM,
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../types/QuanLyPhimType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 1466,
      tenPhim: "The Longest Ride OK",
      biDanh: "the-longest-ride-ok",
      trailer: "https://www.youtube.com/embed/FUS_Q7FsfqU",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/thelongestride.jpg",
      moTa: "lỗi rồi hihi phim cũng chán lắm :)) h thì chạy lại bình thường ảo ma v",
      maNhom: "GP03",
      ngayKhoiChieu: "2022-05-19T19:24:55.803",
      danhGia: 9,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;

      return { ...state };
      break;
    }
    case SET_PHIM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_PHIM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    default: {
      break;
    }
  }
  return { ...state };
};
