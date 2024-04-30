import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import isObjectEmpty from "../../utils/isObjectEmpty";
import Avatar from "../Avatar";
import "./index.css";

const Header = () => {
  const user = useSelector((state) => state.users.user);

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
