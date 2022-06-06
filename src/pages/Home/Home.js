import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeCarousel from "../../templates/HomeTemplate/Layout/Carousel/HomeCarousel";
import MultipleRows from "../../components/ReactSlick/MultipleRowSlick";
// Connect Redux
import Film from "../../components/Film/Film";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimAction";
import { QuanLyRapAction } from "../../redux/actions/QuanLyRapAction";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyPhimReducer);
  const dispatch = useDispatch();

  console.log("props", props);

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(QuanLyRapAction());
  }, []);

  return (
    <div>
      <HomeCarousel></HomeCarousel>
      <div className="container">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto justify-center">
            <MultipleRows arrFilm={arrFilm}></MultipleRows>
          </div>
        </section>
        <div className="mx-36">
          <HomeMenu heThongRapChieu={heThongRapChieu}></HomeMenu>
        </div>
      </div>
    </div>
  );
}
