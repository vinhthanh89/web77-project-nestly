import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localstorage";
import "./index.css";
import { Button, Select } from "antd";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = () => {
    try {
      setLoading(true);
      removeTokenFromLocalStorage();
      removeUserFromLocalStorage();
      toast.success("Logout successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };
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
          <div>
            <p className="flex justify-end text-white text-xl font-black">
              Chou Lee
            </p>
            <p className="flex justify-end">Guest</p>
          </div>
          <div className="dropdown pt-1">
            <details className="dropdown-end border-none">
              <summary className="avatar w-12">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="w-full rounded-full transition-[transform,0.3s,ease] hover:scale-105 active:scale-100"
                />
              </summary>
              <ul className="menu dropdown-content z-[1] bg-base-100 rounded-box w-24">
                <li>
                  <Link to="/account">Account</Link>
                </li>
                <Button
                  htmlType="submit"
                  loading={loading}
                  onClick={handleLogOut}
                  className="bg-red-600 border-none text-white"
                >
                  Logout
                </Button>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
