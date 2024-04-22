import { Link } from "react-router-dom";
import "./index.css";
const NavigationBar = ({ isLoggedIn }) => {
  return (
    <>
      <div className="nav-bar flex justify-end items-center bg-transparent pt-8">
        {/* <ul className="nav-menu pl-10 flex items-center gap-20 bg-transparent">
          <Link className="text-white text-xl font-medium bg-transparent hover:scale-110 hover:text-blue-500">
            Home
          </Link>
          <Link className="text-white text-xl font-medium bg-transparent hover:scale-110 hover:text-red-500">
            Places
          </Link>
        </ul> */}
        <ul className="nav-menu flex items-center gap-20 bg-transparent">
          {isLoggedIn ? (
            <div className="user bg-transparent">
              <img src="" alt="" />
              <Link to="/user">User</Link>
            </div>
          ) : (
            <div className="bg-transparent pr-5">
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