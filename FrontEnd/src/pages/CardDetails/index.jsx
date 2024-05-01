import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { MdOutlineBedroomParent, MdOutlinePets } from "react-icons/md";
import { DatePicker } from "antd";
import { FaShower } from "react-icons/fa";
import moment from "moment/moment";

import Footer from "../../components/Footer";
import Header from "./../../components/Header/index";
import { fetchRoomById } from "../../services/room";
import { calcBookingNights } from "../../utils/calcBookingNights";

const { RangePicker } = DatePicker;

const CardDetails = () => {
  const [roomDetail, setRoomDetail] = useState([]);
  const [bookingDate, setBookingDate] = useState([]);

  const urlParm = useParams();

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const response = await fetchRoomById(urlParm.id);
        console.log(response.data.findRoom);
        setRoomDetail(response.data.findRoom);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoom();
  }, [urlParm.id]);

  const {
    city,
    district,
    address,
    rentPrice,
    images,
    description,
    numberOfBedrooms,
  } = roomDetail;

  const disabledDate = (current) => {
    if (current && current.valueOf() < Date.now()) {
      return true;
    }
  };

  const handleBookingDate = (value) => {
    const pickDate = value.map((item) => {
      return moment(item.$d).format("MM-DD-YYYY");
    });
    setBookingDate(pickDate);
  };

  const totalNight =
    bookingDate.length == 0
      ? 0
      : calcBookingNights(bookingDate[0], bookingDate[1]);
  const totalPrice = totalNight * rentPrice;
  const serviceCharge = rentPrice * 0.05;

  return (
    <>
      <Header />

      <div className="mt-[20px] mb-[50px] h-auto">
        <div className="px-[70px]">
          <div className="text-[30px] text-[#222] font-bold mb-[20px]">
            <p>
              {city} , {district} , {address}
            </p>
          </div>
          <div className="w-full h-[300px] grid grid-rows-2 grid-cols-4 gap-[10px] rounded-[15px] overflow-hidden">
            <img
              className="w-full h-full object-cover row-span-2 col-span-2 "
              src={images ? images[0] : ""}
              alt="Hình ảnh"
            />
            <img
              className="w-full h-full object-cover row-span-1 col-span-2"
              src={images ? images[1] : ""}
              alt="Hình ảnh"
            />
            <img
              className="w-full h-full object-cover row-span-1 col-span-1"
              src={images ? images[2] : ""}
              alt="Hình ảnh"
            />
            <img
              className="w-full h-full object-cover row-span-1 col-span-1"
              src={images ? images[1] : ""}
              alt="Hình ảnh"
            />
          </div>
          <div className="flex justify-between gap-x-[10px] mt-[30px]">
            <div className="w-[52%]">
              <p className="text-2xl font-semibold mb-[10px]">{description} </p>
              <div className="flex items-center gap-x-[8px] mb-[5px]">
                <div className="inline-block w-[40px] h-[40px] p-[7px] bg-[gray] bg-opacity-70 rounded-[50%]">
                  <MdOutlineBedroomParent className="text-[25px] " />
                </div>
                <span className="text-[16px] font-bold">
                  Bedrooms : {numberOfBedrooms}
                </span>
              </div>
              <div className="flex items-center gap-x-[8px] mb-[5px]">
                <div className="inline-block w-[40px] h-[40px] p-[7px] bg-[gray] bg-opacity-70 rounded-[50%] ">
                  <FaShower className="text-[25px]" />
                </div>
                <span className="text-[16px] font-bold">closed bathroom</span>
              </div>
              <div className="flex items-center gap-x-[8px]">
                <div className="inline-block w-[40px] h-[40px] p-[7px] bg-[gray] bg-opacity-70 rounded-[50%] ">
                  <MdOutlinePets className="text-[25px] " />
                </div>
                <span className="text-[16px] font-bold">pets allowed</span>
              </div>
              <p className="pt-3 font-semibold text-xl">Chủ nhà:</p>
              <p className="text-gray-400">
                Chủ nhà chất lượng, 10 năm kinh nghiệm đón tiếp khách
              </p>
              <div className="mt-[10px] bg-[lightgray] h-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                aspernatur cumque qui id repellat illum officia enim nostrum
                porro fugiat ipsum labore sint consequuntur cum perspiciatis,
                dolorum quidem! Mollitia, libero!
              </div>
              <h3 className="pt-10 text-lg font-semibold">
                Chi tiết nơi bạn sẽ nghỉ dưỡng
              </h3>
            </div>
            <div className="w-[33%]">
              <div className="bg-gray-200 border-5 border-black rounded-lg shadow-xl px-6 pt-[25px] pb-[35px] w-full h-auto">
                <div className="flex w-full h-auto">
                  <p className="font-semibold text-2xl">${rentPrice}</p>
                  <p className="mt-[7px]"> /night</p>
                </div>
                <div className="mt-3 w-full">
                  <RangePicker
                    className="w-full"
                    disabledDate={disabledDate}
                    onChange={handleBookingDate}
                  />
                </div>

                <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 w-full rounded-lg transition duration-300 ease-in-out mb-[20px]">
                  Booking
                </button>
                <div className="w-full mt-[10px] text-[18px] font-medium">
                  <span>Total Price &#40; {totalNight} night &#41; :</span>
                  <span className="float-right">${totalPrice}</span>
                </div>
                <div className="w-full mt-[10px] text-[18px] font-medium">
                  <span>Service Charge :</span>
                  <span className="float-right">${serviceCharge}</span>
                </div>
                <div className="w-full h-[1px] mt-[10px] border-solid border-[gray] border-[1px]"></div>
                <div className="w-full mt-[10px] text-[20px] font-bold">
                  <span>Total :</span>
                  <span className="float-right">
                    ${totalPrice + serviceCharge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardDetails;
