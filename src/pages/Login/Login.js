import React from "react";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Login(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  console.log("userLogin", userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);
      console.log("values", values);
    },
  });

  return (
    <form
      onSubmit={(even) => {
        even.preventDefault();
        formik.handleSubmit(even);
      }}
      className="h-full gradient-form bg-gray-200 md:h-screen"
    >
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <NavLink to="/">
                        <img
                          className="mx-auto w-48"
                          src="http://blockter.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2018/02/logo.png"
                          alt="logo"
                        />
                      </NavLink>
                      <h1 className="text-xl font-semibold mt-1 mb-12 pb-1">
                        ĐĂNG NHẬP
                      </h1>
                    </div>
                    <div>
                      <p className="mb-4">
                        Hãy đăng nhập vào tài khoản của bạn
                      </p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          name="taiKhoan"
                          onChange={formik.handleChange}
                          placeholder="Tài khoản"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          name="matKhau"
                          onChange={formik.handleChange}
                          placeholder="Mật khẩu"
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-300 ease-in-out w-full mb-3">
                          Đăng nhập
                        </button>
                        <a className="text-gray-500 hover:text-red-600" href="">
                          Quên mật khẩu?
                        </a>
                      </div>
                      <NavLink
                        to="/register"
                        className="flex items-center justify-center pb-6"
                      >
                        <p className="mb-0 mr-2 text-black hover:text-red-600 transition duration-200">
                          Bạn chưa có tài khoản?
                        </p>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-red-500">
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6 text-white">
                      XIN CHÀO!
                    </h4>
                    <p className="text-sm">
                      Hãy đăng nhập để có trải nghiệm thú vị cùng với BLOCKTER
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
