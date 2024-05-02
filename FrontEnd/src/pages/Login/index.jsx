
import { Button, Form, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { login as loginAction } from "../../features/user/userSlice.js";
import { login } from "../../services/user";
import "./index.css";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  saveTokenToLocalStorage,
  saveUserToLocalStorage
} from "../../utils/localstorage";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  // On finish
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const result = await login(values);
      const userRole = result.data.returnUser.role
      console.log(userRole);
      dispatch(loginAction({user : result.data.returnUser}));
      saveUserToLocalStorage(result.data.returnUser);
      saveTokenToLocalStorage(result.data.accessToken);
      toast.success("Login successfully!");
      if(userRole === 'admin'){
        navigate('/dashboard')
      }else{

        navigate("/home")
      }
    } catch (error) {
      toast.error(error.response.data?.message || error.messages);
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
      className="login w-screen h-screen flex justify-center items-center"
      initialValues={{
        email: "",
        password: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="login-holder w-1/4 p-8">
        <h1 className="flex justify-center w-full mb-2 text-3xl font-bold text-black text-center">
          Welcome to Nestly!
        </h1>
        <p className="flex justify-center w-full mb-6 text-xl font-extralight">
          Login into your account
        </p>
        <div className="input-holder w-full">
          <div className="relative mb-4">
            <Form.Item name="email">
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <HiMail className="absolute right-4 top-4" />
          </div>
          <div className="relative mb-4">
            <Form.Item name="password">
              <Input.Password type="password" placeholder="Password" />
            </Form.Item>
          </div>
        </div>
        <Form.Item className="btn-holder flex justify-center w-full mt-5 mb-5">
          <Button
            htmlType="submit"
            loading={loading}
            className="btn w-28 h-10 bg-black text-white mt-5"
          >
            Login
          </Button>
        </Form.Item>
        <div className="flex justify-between w-full mt-5">
          <Link to="/" className="flex">
            <BsArrowLeftShort className="mt-1 mr-1" />
            <p>Go back</p>
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default Login;
