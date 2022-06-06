import axios from "axios";
import { DOMAIN, TOKEN_CYBER } from "../../util/setting";
import { SET_CAROUSEL } from "../types/CarouselType";

export const getCarouselActions = () => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
        method: "GET",
        headers: {
          TokenCybersoft: TOKEN_CYBER,
        },
      });
      console.log("result", result);
      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
