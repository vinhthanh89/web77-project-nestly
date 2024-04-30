import { useEffect, useState } from "react";
import RoomCard from "../RoomCard";
import "./style.css";
import { fetchRoomData } from "../../services/room";

const CardList = () => {
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetchRoomData();
        setRoomData(response.data.rooms);
      } catch (error) {
        console.log(error);
      }
    };
    data();
  }, []);


  const renderData = roomData.map((item) => {
    return (
      <div key={item._id} >
        <RoomCard props={item} />
      </div>
    );
  });

  return (
    <>
      <div className="card-list bg-white">
        <div className="py-[2rem] px-[2rem] grid grid-cols-auto-fit-300 justify-items-center items-center gap-y-[15px] gap-x-[5px]">
          {renderData}
        </div>
      </div>
    </>
  );
};

export default CardList;
