import { Link } from "react-router-dom";
import "./index.css";
const Header = ({ isLoggedIn }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="header w-10/12 flex">
          <div className="left w-1/2 flex">
            <Link to="/" className="item text-black text-xl">
              Home
            </Link>
            <Link to="/home" className="item text-black text-xl">
              Places
            </Link>
          </div>
          {isLoggedIn ? (
            <div className="right w-1/2 flex justify-end">
              <img src="" alt="" />
              <Link to="/user">User</Link>
            </div>
          ) : (
            <div className="right w-1/2 flex justify-end">
              <Link to="/login" className="item">
                <button className="w-28 h-10 bg-blue-700 text-white">
                  Login
                </button>
              </Link>
              <Link to="/sign-up" className="item">
                <button className="w-28 h-10 bg-black text-white">
                  Sign up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
