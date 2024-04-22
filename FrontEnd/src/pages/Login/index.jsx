import { Link } from "react-router-dom";
import "./index.css";
import { BiSolidLockAlt } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Form } from "antd";
import { login } from "../../services/user";
import toast from "react-hot-toast";
import { useState } from "react";
import { login as loginAction } from "../../features/user/userSlice.js";
import { useSelector } from "react-redux";
import {
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from "../../utils/localstorage";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => console.log(state));
  console.log(user);

  // On finish
  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoading(true);
      const result = await login(values);
      saveUserToLocalStorage(result.data.user);
      toast.success("Login successfully!");
    } catch (error) {
      toast.error("Login failed!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      initialValues={{}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="login w-screen h-screen flex justify-center items-center"
    >
      <div className="login-holder w-1/4 p-8">
        <h1 className="flex justify-center w-full mb-2 text-3xl font-bold text-black">
          Welcome!
        </h1>
        <p className="flex justify-center w-full mb-6 text-xl font-extralight">
          Login into your account
        </p>
        <div className="input-holder w-full">
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
          <button className="w-28 h-10 bg-black text-white mt-5">Login</button>
        </div>
        <div className="flex justify-between w-full mt-5">
          <Link to="/" className="flex">
            <BsArrowLeftShort className="mt-1 mr-1" />
            <p>Go back</p>
          </Link>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </div>
    </Form>
  );
};

export default Login;
