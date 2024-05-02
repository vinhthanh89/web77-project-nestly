import React, { useState } from "react";
import {
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Input, Button, Avatar, theme } from "antd";
import { Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { MdLogout, MdOutlineBedroomParent } from "react-icons/md";
import "./style.css";

import { logout } from "../../features/user/userSlice";
import UserDashboard from "../../pages/UserDashboard";
import RoomDashboard from "../../pages/RoomDashboard";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const AuthLayout = () => {
  const [dashBoard, setDashBoard] = useState("user");

  const handleLogOutAdmin = () => {
    dispatch(logout());
    navigate("/");
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      "User",
      "sub1",
      <Button ghost onClick={() => setDashBoard('user')}>
        <UserOutlined />
      </Button>
    ),
    getItem(
      "Room",
      "sub2",
      <div onClick={() => setDashBoard("room")}>
        <Button ghost>
        <MdOutlineBedroomParent />
        </Button>
      </div>
    ),
    getItem(
      "Logout",
      "sub3",
      <div onClick={handleLogOutAdmin}>
        <Button ghost>
          <MdLogout />
        </Button>
      </div>
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="m-5">
          <img
            className="rounded-xl "
            src="https://res.cloudinary.com/du6uinlwy/image/upload/v1714406960/Nestly/Logo_white_fxhsab.png"
          />
        </div>
        <Menu
          className="mt-10"
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      <Layout>
        {dashBoard == "user" && <UserDashboard />}
        {dashBoard == "room" && <RoomDashboard />}
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "130px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "30px",
            }}
          >
            <Input
              placeholder="Search..."
              prefix={<FaSearch />}
              style={{ paddingLeft: "20px" }}
            />
          </div>
        </Header> */}
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
