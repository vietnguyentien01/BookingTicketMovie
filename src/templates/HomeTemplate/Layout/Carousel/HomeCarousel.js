import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselActions } from "../../../../redux/actions/CarouselAction";

const contentStyle = {
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispatch = useDispatch();

  // Sẽ kích hoạt khi component load ra
  useEffect(() => {
    dispatch(getCarouselActions());
  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            ></img>
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel effect="fade" style={{ position: "relative", zIndex: 1 }}>
      {renderImg()}
    </Carousel>
  );
}
