import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Select } from "antd";
import _ from "lodash";

// Hook đa ngôn ngữ
import { useTranslation } from "react-i18next";
import { TOKEN_CYBER, USER_LOGIN } from "../../../../util/setting";

const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { t, i18n } = useTranslation();

  const handleChange = (value) => {
    i18n.changeLanguage(value);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <NavLink to="/login" className="self-center px-8 py-3 rounded">
            {t("signin")}
          </NavLink>
          <NavLink
            to="/register"
            className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900"
          >
            {t("signup")}
          </NavLink>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <NavLink to="/profile" className="self-center px-8 py-3 rounded">
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
      </Fragment>
    );
  };

  return (
    <header className="p-4 bg-black bg-opacity-50 text-gray-100 fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to="/" className="flex items-center p-2">
          <img
            src="http://blockter.bdiakcml8h-e92498n216kr.p.runcloud.link/wp-content/uploads/2018/02/logo.png"
            alt="logo"
            className="w-full h-full"
          ></img>
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400 focus:border-b-2 border-yellow-100"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Contact
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/news"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              News
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {renderLogin()}
          <Select
            defaultValue="vn"
            style={{ width: 120, marginLeft: "10px", padding: 10 }}
            onChange={handleChange}
          >
            <Option value="vn">Viet Nam</Option>
            <Option value="jap">Japan</Option>
            <Option value="en">English</Option>
          </Select>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
