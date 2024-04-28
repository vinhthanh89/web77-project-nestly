import { Select } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import isObjectEmpty from "../../utils/isObjectEmpty";
import Avatar from "../Avatar";
import "./index.css";
import { useEffect, useState } from "react";
import { fetchCityOptions } from "../../services/room";

const Header = () => {
  const user = useSelector((state) => state.users.user);
  const [cityOptions , setCityOptions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCityOptions()
        console.log(response.data.cityArray);
        setCityOptions(response.data.cityArray)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

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
            className="input_select"
            placeholder="Type"
            style={{
              width: 120,
            }}

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
            className="input_select"
            placeholder="Search city"
            style={{
              width: 120,
            }}

            options={cityOptions.map(city => {
              return {
                value : city ,
                label : city
              }
            })}
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
