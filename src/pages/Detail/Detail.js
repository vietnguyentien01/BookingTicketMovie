import React, { useEffect, useState } from "react";
import { Tabs, Radio, Space, Rate } from "antd";
import { StarOutlined } from "@ant-design/icons";
import "../../assets/styles/circle.css";
import { useDispatch, useSelector } from "react-redux";
import { layThongTinLichChieuPhim } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;

export default function Detail(props) {
  const [tabPosition, setTabPosition] = useState("left");

  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);

  const dispatch = useDispatch();

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinLichChieuPhim(id));
  }, []);

  return (
    <div
      className="w-full flex justify-center relative"
      style={{
        background: ` url(${filmDetail.hinhAnh}) no-repeat center / cover`,
        minHeight: "100vh",
      }}
    >
      <div className="absolute backdrop-blur-md w-full h-full top-0 left-0"></div>
      <div className="grid grid-cols gap-8 py-40 blur-0 w-full">
        <div className="col-span-12">
          <div className="flex flex-row gap-8 py-5 blur-0 w-full justify-around">
            <div
              className="flex max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 content-center basis-2/3"
              style={{ height: "410px" }}
            >
              <div className="flex-1 p-3">
                <img
                  className="rounded-2xl w-full h-full p-3"
                  src={filmDetail.hinhAnh}
                  alt=""
                />
              </div>
              <div className="p-5 flex-1 ">
                <div className="">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {filmDetail.tenPhim}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate w-28">
                    {filmDetail.moTa}
                  </p>
                </div>
                <div className="flex flex-row w-full h-60">
                  <NavLink
                    to="/"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-end"
                  >
                    Xem phim
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center basis-1/3">
              <h1 className="text-center text-blue-500 pb-2 text-2xl">
                ĐÁNH GIÁ
              </h1>
              <div
                className={`c100 p${
                  filmDetail.danhGia * 10
                } medium self-center`}
              >
                <span className="">{filmDetail.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-lg">
                  <Rate
                    allowHalf
                    disabled
                    value={filmDetail.danhGia / 2}
                    style={{ color: "#307bbb" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 w-full col-span-12">
          <div className="container">
            <Tabs defaultActiveKey="1" centered className="bg-white">
              <TabPane tab="Lịch chiếu" key="1">
                <Tabs tabPosition={tabPosition}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex flex-row py-2">
                            <img
                              src={htr.logo}
                              width={42}
                              height={42}
                              alt={htr.logo}
                              className="mr-2"
                              style={{ minWidth: "42px" }}
                            ></img>
                            <div className="self-center">
                              {htr.tenHeThongRap}
                            </div>
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="mt-3" key={index}>
                              <div className="flex flex-row">
                                <img
                                  src="https://picsum.photos/700"
                                  width={60}
                                  height={60}
                                ></img>
                                <div className="ml-2">
                                  <p className="text-xl leading-3 mt-1">
                                    {cumRap.tenCumRap}
                                  </p>
                                  <p className="text-gray-500">
                                    {cumRap.tenCumRap}
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-8 gap-1">
                                {cumRap.lichChieuPhim
                                  ?.slice(0, 12)
                                  .map((lichChieu, index) => {
                                    return (
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        className="col-span-1 text-blue-500"
                                        key={index}
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    );
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </TabPane>
              <TabPane tab="Thông tin" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Đánh giá" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
