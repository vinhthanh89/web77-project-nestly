import { Link } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";

import Avatar from "../Avatar";
import isObjectEmpty from "../../utils/isObjectEmpty";
// import { useState } from "react";

const NavigationBar = () => {
  const user = useSelector(state => state.users.user)
  // const [userLogin , setUserLogin] = useState(JSON.parse(localStorage.getItem('user')) || null)

  // const handleLogOutUser = () => {
  //   setUserLogin(null)
  // }

  return (
    <>
      <div className="nav-bar flex justify-end items-center pt-8">
        <ul className="nav-menu flex items-center gap-20">
          {isObjectEmpty(user) ? 
             (<div className="pr-5">
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
            </div>) : (<Avatar user={user} />) }
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
