import { Link } from "react-router-dom";
import "../Login/index.css";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
const SignUp = () => {
  return (
    <>
      <div className="login w-screen h-screen flex justify-center items-center">
        <div className="login-holder w-1/4 p-8">
          <h1 className="flex justify-center w-full mb-2 text-3xl font-bold text-black">
            Welcome to Nestly!
          </h1>
          <p className="flex justify-center w-full mb-6 text-xl font-extralight">
            Create your new account
          </p>
          <div className="input-holder w-full">
            <div className="relative mb-4">
              <input type="text" placeholder="Name" />
              <BiSolidUser className="absolute right-4 top-4" />
            </div>
            <div className="relative mb-4">
              <input type="email" placeholder="Email" />
              <HiMail className="absolute right-4 top-4" />
            </div>
            <div className="relative mb-4">
              <input type="password" placeholder="Password" />
              <BiSolidLockAlt className="absolute right-4 top-4" />
            </div>
          </div>
          <div className="btn-holder flex justify-center w-full mt-5 mb-5">
            <button className="w-28 h-10 bg-black text-white mt-5">
              Login
            </button>
          </div>
          <div className="flex justify-between w-full mt-5">
            <Link to="/" className="flex">
              <BsArrowLeftShort className="mt-1 mr-1" />
              <p>Go back</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;