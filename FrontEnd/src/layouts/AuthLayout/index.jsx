import { Outlet } from "react-router";
const AuthLayout = () => {
  //! Nhớ sử dụng outlet, nếu không có outlet, thông tin không được hiện lên
  //todo Tùy biến, design trong đây
  return (
    <>
      <div>Hello authentication</div>
      <Outlet />
    </>
  );
};

export default AuthLayout;
