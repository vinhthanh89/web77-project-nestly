/* eslint-disable react/prop-types */
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import {
//   removeTokenFromLocalStorage,
//   removeUserFromLocalStorage,
// } from "../../utils/localstorage";
import toast from "react-hot-toast";
// import { useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import ModalUser from "../ModalUser";

// eslint-disable-next-line react/prop-types
const Avatar = ({user}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleLogOut = () => {
      try {
        dispatch(logout())
        // removeTokenFromLocalStorage();
        // removeUserFromLocalStorage();
        toast.success("Logout successfully!");
        navigate("/");
      } catch (error) {
        toast.error(error.response.data?.message || error.message);
      } 
    };
    return (
      <>
        <div className="user">
          <div className="flex items-center gap-5">
            <div>
              <p className="flex justify-end text-white text-xl font-black">
                {user.username}
              </p>
              <p className="flex text-white justify-end">{user.role}</p>
            </div>
            <div className="dropdown pt-1">
              <details className="dropdown-end border-none">
                <summary className="avatar w-12 h-12">
                  <img
                    src={user.avatar}
                    className="w-full rounded-[50%] transition-[transform,0.3s,ease] hover:scale-105 active:scale-100"
                  />
                </summary>
                <ul className="menu dropdown-content z-[1] rounded-box bg-base-300 w-28">
                  <li className="mb-3">
                    <ModalUser />
                  </li>
                  <li>
                    <Button
                      htmlType="submit"
                      onClick={handleLogOut}
                      type="primary"
                      danger
                      className="border-none pl-[1.5rem] pb-[2rem] font-bold"
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </>
    );
}
export default Avatar