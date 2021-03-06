import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import "./Checkout.css";
import {
  CheckCircleOutlined,
  CheckOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { DAT_GHE } from "../../redux/types/QuanLyDatVeType";
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { Button, Tabs } from "antd";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import { NavLink } from "react-router-dom";
import { sortBy, isEmpty } from "lodash";
import Swal from "sweetalert2";
import _ from "lodash";
import { history } from "../../App";
import { TOKEN_CYBER, USER_LOGIN } from "../../util/setting";

const { TabPane } = Tabs;

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const dispacth = useDispatch();
  console.log("danhSachGheDD", danhSachGheDangDat);
  useEffect(() => {
    // Gọi hàm tạo ra 1 async function
    const action = layChiTietPhongVeAction(props.match.params.id);
    // dispacth action này đi
    dispacth(action);
  }, []);

  console.log({ chiTietPhongVe });
  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";

      let classGheDangDat = "";
      let indexGheDangDat = danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (indexGheDangDat !== -1) {
        classGheDangDat = "gheDangDat";
      }

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispacth({
                type: DAT_GHE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            key={index}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat}  `}
          >
            {ghe.daDat ? (
              classGheDaDuocDat !== "" ? (
                <UserOutlined />
              ) : (
                <CheckCircleOutlined />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5 ">
            <div className="bg-black w-2/3 h-2"></div>
            <div className={`${style["trapezoid"]} w-2/3 text-center`}>
              <span className="text-xl">Màn hình</span>
            </div>
            <div
              className="mt-10 w-full flex justify-center"
              style={{ width: "80%" }}
            >
              <div className="w-full ml-7">{renderSeats()}</div>
            </div>
          </div>
          <div className="flex flex-row justify-center my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Ghế chưa đặt
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ghế đang đặt
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ghế VIP
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ghế đã được đặt
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ghế bạn đặt
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">
                      <button className="ghe bg-white">
                        <CheckOutlined />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button className="ghe gheDangDat">
                        <CheckOutlined />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button className="ghe gheVip">
                        <CheckOutlined />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="ghe gheDaDat"
                        style={{ cursor: "pointer !important" }}
                      >
                        <CheckOutlined />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button className="ghe gheDaDuocDat">
                        <CheckOutlined />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h3 className="border-b-2 text-xl text-center py-3 text-green-500">
            {danhSachGheDangDat
              .reduce((tongTien, ghe, index) => {
                return (tongTien += ghe.giaVe);
              }, 0)
              .toLocaleString()}
          </h3>
          <div className="border-b-2 py-3">
            <h3>{thongTinPhim.tenPhim}</h3>
            <p>
              Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.diaChi}
            </p>
            <p>
              Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} -
              {thongTinPhim.tenRap}
            </p>
          </div>
          <div className="flex flex-row border-b-2 py-3">
            <div className="basis-1/2 text-red-500">
              <span>Ghế: </span>
              {danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <span key={index} className="text-green-500">
                    {gheDangDat.stt}
                  </span>
                );
              })}
            </div>
            <div className="basis-1/2 text-green-500">
              <span>
                {danhSachGheDangDat
                  .reduce((tongTien, ghe, index) => {
                    return (tongTien += ghe.giaVe);
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex flex-col border-b-2 py-3">
            <div className=" text-gray-500">
              <span>E-Mail</span>
            </div>
            <div className="">
              <span>{userLogin.email}</span>
            </div>
          </div>
          <div className="flex flex-col border-b-2 py-3">
            <div className=" text-gray-500">
              <span>Phone</span>
            </div>
            <div className="">
              <span>{userLogin.soDT}</span>
            </div>
          </div>
          <div className="flex flex-col text-center mb-0  justify-end">
            <div
              className=" text-white py-3 text-2xl bg-green-500 hover:bg-green-700 transition duration-300"
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;

                if (_.isEmpty(danhSachGheDangDat)) {
                  Swal.fire({
                    title: "Chọn tối thiểu 1 ghế để đặt vé",
                    icon: "error",
                    confirmButtonText: "Đã hiểu",
                  });
                } else {
                  dispacth(datVeAction(thongTinDatVe));
                }

                console.log(thongTinDatVe);
              }}
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const callback = (key) => {};
export default function CheckoutTab(props) {
  const dispacth = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const operations = (
    <Fragment>
      {!isEmpty(userLogin) ? (
        <div className="flex flex-row">
          <NavLink
            to="/profile"
            className="btn btn-danger mr-2 rounded-sm bg-blue-300 text-white hover:text-black p-3 mb-2"
          >
            {userLogin.taiKhoan}
          </NavLink>
          <NavLink
            to="/login"
            className="btn btn-danger text-red-500 p-3 mb-2"
            onClick={() => {
              return localStorage.removeItem(USER_LOGIN, TOKEN_CYBER);
            }}
          >
            Đăng xuất
          </NavLink>
        </div>
      ) : (
        " "
      )}
    </Fragment>
  );

  return (
    <div className="p-4">
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        onChange={callback}
      >
        <TabPane tab="01 CHỌN GHẾ VÀ THANH TOÁN" key="1">
          <Button type="primary">
            <NavLink to="/" className="flex flex-row text-xl">
              <HomeOutlined />
            </NavLink>
          </Button>
          <Checkout {...props}></Checkout>
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <Button type="primary">
            <NavLink to="/" className="flex flex-row text-xl">
              <HomeOutlined />
            </NavLink>
          </Button>

          <KetQuaDatVe {...props}></KetQuaDatVe>
        </TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe(props) {
  // const { userData } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  console.log("userLogin", userLogin);
  const dispacth = useDispatch(props.match.params.id);

  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispacth(action);
  }, []);

  const { thongTinPhim } = chiTietPhongVe;

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Lịch sử đặt vé
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Thông tin chi tiết
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={thongTinPhim.hinhAnh}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Tên phim: {thongTinPhim.tenPhim}
                  </h2>
                  <p className="text-gray-500">
                    Địa chỉ: {thongTinPhim.diaChi}
                  </p>
                  <p className="text-gray-500">
                    Rạp: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
                  </p>
                  <p className="text-gray-500">
                    Giờ chiếu: {thongTinPhim.gioChieu}
                  </p>
                  <p className="text-gray-500">
                    Ghế số:
                    {sortBy(danhSachGheDangDat, ["stt"]).map((gheDD, index) => {
                      return (
                        <span key={index} className="ml-1 text-gray-500">
                          {gheDD.stt}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
