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
        console.log(response.data.rooms);
        setRoomData(response.data.rooms);
      } catch (error) {
        
      }
    };
    data();
  }, []);

  const renderData = roomData.map((item) => {
    return (
      <div key={item._id}>
        <RoomCard props={item} />
      </div>
    );
  });

  return (
    <div className="py-[20px] w-full h-full grid grid-cols-auto-fit-300 justify-items-center items-center gap-y-[15px] gap-x-[5px]">
      {renderData}
    </div>
  );
};

export default CardList;
