import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localstorage";
import "./index.css";
import { Button, Select } from "antd";
import { useSelector } from "react-redux";
import isObjectEmpty from "../../utils/isObjectEmpty";
import Avatar from "../Avatar";

const Header = () => {
  const user = useSelector((state) => state.users.user);
  // const navigate = useNavigate();
  // const handleLogOut = () => {
  //   try {
  //     removeTokenFromLocalStorage();
  //     removeUserFromLocalStorage();
  //     toast.success("Logout successfully!");
  //     navigate("/");
  //   } catch (error) {
  //     toast.error(error.response.data?.message || error.message);
  //   }
  // };
  return (
    <>
      <div className="header w-full flex justify-between bg-black p-[1rem] sticky top-0 z-[1]">
        {/* Logo */}
        <div className="flex">
          <img src="/assets/Logo_white.png" alt="" className="w-[3rem]" />
          <h1 className="logo text-4xl text-white font-black ml-[0.5rem] mt-[1rem]">
            Nestly
          </h1>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-5">
          <Select
            placeholder="Type"
            style={{
              width: 120,
            }}
            // onChange={isOpen}
            options={[
              {
                value: "all",
                label: "All",
              },
              {
                value: "house",
                label: "House",
              },
              {
                value: "apartment",
                label: "Apartment",
              },
            ]}
          />
          <Select
            placeholder="Search city"
            style={{
              width: 120,
            }}
            // onChange={isOpen}
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </div>
        {/* User & Avatar */}
        <div className="flex items-center gap-5">
          {isObjectEmpty(user) ? (
            <div className="pr-5">
              <Link
                to="/login"
                className="btn text-white text-xl font-medium bg-blue-700 hover:scale-105 hover:bg-blue-700"
              >
                Login
              </Link>
              <Link
                to="/sign-up"
                className="btn ml-5 text-white text-xl font-medium hover:scale-105"
              >
                Sign up
              </Link>
            </div>
          ) : (
            <Avatar user={user} />
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
