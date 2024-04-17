import { Outlet } from "react-router-dom";
const NonAuthLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default NonAuthLayout;
