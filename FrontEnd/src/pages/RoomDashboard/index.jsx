import { Pagination, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { MdDelete, MdOutlineBedroomParent } from "react-icons/md";
import { getPagingRoomData, getRoomData } from "../../services/room";
import toast from "react-hot-toast";
import { deleteUser } from "../../services/user";

const RoomDashboard = () => {
  const [dataRoom, setDataRoom] = useState([]);
  const [loading, setLoading] = useState(false);

  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalDoc, setTotalDoc] = useState(0);

  const handleDeleteRoom = async (roomId) => {
    try {
      await deleteUser(roomId);
      setDataRoom(dataRoom.filter((user) => user._id !== roomId));
      toast.success("Delete Success");
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await getRoomData();
  //         setDataRoom(response.data.rooms);
  //         console.log(response);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    const fetchPagingData = async () => {
      try {
        setLoading(true);
        const response = await getPagingRoomData({ pageSize, pageIndex });
        console.log(response);
        setDataRoom(response.data.room);
        setTotalPages(response.data.totalPage);
        setTotalDoc(response.data.totalDocument);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPagingData();
  }, [pageIndex, pageSize]);

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "role",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: <MdOutlineBedroomParent />,
      dataIndex: "numberOfBedrooms",
      key: "numberOfBedrooms",
    },
    {
      title: "Price",
      dataIndex: "rentPrice",
      key: "rentPrice",
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
              onConfirm={() => handleDeleteRoom(row._id)}
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
  ];

  return (
    <div>
      <div className="w-full h-[100px] flex items-center justify-between pl-[20px] pr-[30px]">
        <span className="flex items-center gap-x-[5px] text-[30px]">
          <MdOutlineBedroomParent />
          Room
        </span>
        <div className="flex relative">
          <input
            className="w-[300px] h-[40px] border-[2px] border-solid border-[lightgray] rounded-[18px] pl-[15px] text-[18px]"
            type="text"
            placeholder="Search..."
          />
          <button className="absolute right-3 top-[8px] text-[22px] text-[gray] hover:text-[black]"></button>
        </div>
        <div>
          <button
            // onClick={() => setModalCreateUser(true)}
            className="w-[100px] h-[40px] bg-[#3EB489] rounded-[18px] hover:bg-opacity-75 shadow-xl "
          >
            Add Room
          </button>
        </div>
      </div>
      <Table columns={columns} dataSource={dataRoom} pagination={false} />
      <Pagination
        defaultCurrent={1}
          current={pageIndex}
          total={totalDoc}
          pageSize={pageSize}
        showSizeChanger
          onChange={(pageIndex, pageSize) => {
            setPageSize(pageSize);
            setPageIndex(pageIndex);
          }}
      />
    </div>
  );
};

export default RoomDashboard;
