import { useEffect, useState } from "react";
import RoomCard from "../RoomCard";
import "./style.css";
import { fetchCityOptions, fetchRoomData } from "../../services/room";
import { Collapse, Radio, Select, Space } from "antd";

const CardList = () => {
  const [roomData, setRoomData] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [queryValue, setQueryValue] = useState({
    type: "all",
    city: "all",
    sort: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resRoomData, resCityOptions] = await Promise.all([
          await fetchRoomData(queryValue),
          await fetchCityOptions(),
        ]);

        setRoomData(resRoomData.data.rooms);
        setCityOptions(resCityOptions.data.cityArray);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [queryValue]);

  //! Data
  const renderData = roomData.map((item) => {
    return (
      <div key={item._id}>
        <RoomCard props={item} />
      </div>
    );
  });

  const renderCityOptions = cityOptions.map((city) => {
    return (
      <div key={city}>
        <Radio value={city}>{city}</Radio>
      </div>
    );
  });

  const items = [
    {
      key: "1",
      label: "Type",
      children: (
        <Radio.Group
          onChange={(e) => {
            setQueryValue((prevState) => ({
              ...prevState,
              type: e.target.value,
            }));
          }}
          defaultValue="all"
        >
          <Space direction="vertical">
            <Radio value="all">All</Radio>
            <Radio value="house">House</Radio>
            <Radio value="apartment">Apartment</Radio>
          </Space>
        </Radio.Group>
      ),
    },
    {
      key: "2",
      label: "City",
      children: (
        <Radio.Group
          onChange={(e) => {
            setQueryValue((prevState) => ({
              ...prevState,
              city: e.target.value,
            }));
          }}
          defaultValue="all"
        >
          <Space direction="vertical">
            <Radio value="all">All</Radio>
            {renderCityOptions}
          </Space>
        </Radio.Group>
      ),
    },
  ];

  return (
    <>
      <div className="card-list w-full flex px-[2rem] py-[2rem] gap-[10px] bg-white">
        {/* filter */}
        <div className="w-[20%] h-[screen] border-solid border-[2px] border-[lightgray] px-[1rem] pt-[1rem] rounded-[10px] max-md:hidden">
          <div>
            <span className="mr-[1rem]">Sort By</span>
            <Select
              onChange={(value) => {
                setQueryValue((prevState) => ({
                  ...prevState,
                  sort: value,
                }));
              }}
              placeholder="Sort By Price"
              options={[
                {
                  value: "asc",
                  label: "Price : Low - High",
                },
                {
                  value: "desc",
                  label: "Price : High - Low",
                },
              ]}
            />
          </div>
          <div>
            <Collapse
              items={items}
              ghost              
              defaultActiveKey={["1"]}
              onChange={(key) => key}
            />
          </div>
        </div>
        <div className="w-[80%]">
          <div className="float-right mb-[15px] hidden max-md:block">
            <Select
              className="input_select mr-[10px]"
              onChange={(value) => {
                setQueryValue((prevState) => ({
                  ...prevState,
                  ["type"]: value,
                }));
              }}
              placeholder="Type"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "all",
                  label: "All",
                },
                {
                  value: "house",
                  label: "House",
                },
                {
                  value: "apartment",
                  label: "Apartment",
                },
              ]}
            />
            <Select
              className="input_select mr-[10px]"
              onChange={(value) => {
                setQueryValue((prevState) => ({
                  ...prevState,
                  ["city"]: value,
                }));
              }}
              placeholder="Search city"
              style={{
                width: 120,
              }}
              options={cityOptions.map((city) => {
                return {
                  value: city,
                  label: city,
                };
              })}
            />
            <Select
              className="input_select"
              onChange={(value) => {
                setQueryValue((prevState) => ({
                  ...prevState,
                  sort: value,
                }));
              }}
              placeholder="Sort By Price"
              style={{
                width: 160,
              }}
              options={[
                {
                  value: "asc",
                  label: "Price : Low - High",
                },
                {
                  value: "desc",
                  label: "Price : High - Low",
                },
              ]}
            />
          </div>
          <div className="grid grid-cols-auto-fit-240 items-center gap-[10px]">
            {renderData}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
