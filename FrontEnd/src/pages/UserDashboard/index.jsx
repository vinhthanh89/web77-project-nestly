import { Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { deleteUser, getUserData } from "../../services/user";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { UserOutlined } from "@ant-design/icons";

const UserDashboard = () => {
  const [dataUser, setDataUser] = useState([]);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      setDataUser(dataUser.filter((user) => user._id !== userId));
      toast.success("Delete User Success");
    } catch (error) {
      console.log(error);
      toast.error("Delete User Failed");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Action",
      key: "action",
      render: (row) => {
        return (
          <div>
            <Popconfirm
              title="Xoá người dùng"
              description="Bạn có chắc chắn xoá người dùng này"
              onConfirm={() => handleDeleteUser(row._id)}
              okText="Ok"
              cancelText="Cancle"
              style={{ cursor: "pointer" }}
            >
              <MdDelete className="cursor-pointer" />
            </Popconfirm>
          </div>
        );
      },
    },

    // {
    //   title: "Action",
    //   key: "action",
    //   render: (row) => {
    //     return (
    //       <div className="flex gap-2">
    //         <FaEdit
    //           cursor={"pointer"}
    //           onClick={() => {
    //             handleOpenEditModal(row._id);
    //           }}
    //         />
    //         <Popconfirm
    //           title="Xoá người dùng"
    //           description="Bạn có chắc chắn xoá người dùng này"
    //           onConfirm={() => handleDeleteUser(row._id)}
    //           okText="Đồng ý"
    //           cancelText="Huỷ"
    //           style={{ cursor: "pointer" }}
    //         >
    //           <MdDelete />
    //         </Popconfirm>
    //         <FaFileImage
    //           cursor={"pointer"}
    //           onClick={() => handleOpenUploadUserAvatarModal(row._id)}
    //         />
    //       </div>
    //     );
    //   },
    // },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserData();
        setDataUser(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-full h-[100px] flex items-center justify-between pl-[20px] pr-[30px]">
        <span className="flex items-center gap-x-[5px] text-[30px]">
          <UserOutlined />
          Users
        </span>
        <div className="flex relative">
          <input
            className="w-[300px] h-[40px] border-[2px] border-solid border-[lightgray] rounded-[18px] pl-[15px] text-[18px]"
            type="text"
            placeholder="Search..."
          />
          <button className="absolute right-3 top-[8px] text-[22px] text-[gray] hover:text-[black]"></button>
        </div>
        {/* <div>
          <button
            // onClick={() => setModalCreateUser(true)}
            className="w-[100px] h-[40px] bg-[#3EB489] rounded-[18px] hover:bg-opacity-75 shadow-xl "
          >
            Add User
          </button>
        </div> */}
      </div>
      <Table columns={columns} dataSource={dataUser} pagination={false} />
    </div>
  );
};

export default UserDashboard;
