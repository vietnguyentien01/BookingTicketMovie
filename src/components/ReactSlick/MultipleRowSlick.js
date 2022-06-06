import React from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import {
  SET_PHIM_DANG_CHIEU,
  SET_PHIM_SAP_CHIEU,
} from "../../redux/types/QuanLyPhimType";
import Film from "../Film/Film";
import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

export default function MultipleRows(props) {
  const dispacth = useDispatch();
  const renderFilms = () => {
    return props.arrFilm.slice(0, 16).map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <Film phim={item}></Film>
        </div>
      );
    });
  };

  const settings = {
    className: "center veriable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <div className="mb-4">
        <button
          className="py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition ease-in-out delay-100 duration-500 focus:-translate-y-2 focus:scale-95 mr-3"
          onClick={() => {
            const action = { type: SET_PHIM_DANG_CHIEU };
            dispacth(action);
          }}
        >
          Đang chiếu
        </button>
        <button
          className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-dbg-red-600 dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-dbg-red-600 transition ease-in-out delay-100 duration-500 focus:-translate-y-2 focus:scale-95"
          onClick={() => {
            const action = { type: SET_PHIM_SAP_CHIEU };
            dispacth(action);
          }}
        >
          Sắp chiếu
        </button>
      </div>
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
}
