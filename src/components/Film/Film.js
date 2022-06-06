import { Tabs } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../App";

export default function Film(props) {
  const { phim } = props;

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-2">
      <div className="p-3">
        <div
          style={{ background: `url(${phim.hinhAnh}) center center / cover` }}
        >
          <img
            src={phim.hinhAnh}
            alt={phim.tenPhim}
            className="w-full opacity-0 h-96 rounded-t-lg"
          />
        </div>
      </div>
      <div className="p-5">
        <div className="h-20">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {phim.tenPhim}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 pb-2">
          {phim.moTa.length > 40 ? (
            <span>{phim.moTa.slice(0, 40)}...</span>
          ) : (
            <span>{phim.moTa}</span>
          )}
        </p>
        <div
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition ease-in-out delay-100 duration-500 focus:-translate-y-1 focus:scale-110"
          onClick={() => {
            history.push(`/detail/${phim.maPhim}`);
          }}
        >
          Đặt vé ngay
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
        </div>
      </div>
    </div>
  );
}
