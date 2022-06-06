import { SET_CAROUSEL } from "../types/CarouselType";

const stateDefault = {
  arrImg: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrImg = action.arrImg;
      return { ...state };
      break;
    }
    default: {
      break;
    }
  }
  return { ...state };
};