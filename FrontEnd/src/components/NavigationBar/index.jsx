import { Link } from "react-router-dom";
import "./index.css";
const NavigationBar = ({ isLoggedIn }) => {
  return (
    <>
      <div className="nav-bar flex justify-end items-center pt-8">
        <ul className="nav-menu flex items-center gap-20">
          {isLoggedIn ? (
            <div className="user">
              <img src="" alt="" />
              <Link to="/user">User</Link>
            </div>
          ) : (
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
          )}
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;