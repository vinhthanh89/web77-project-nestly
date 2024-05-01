import { MdOutlineBedroomParent } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./style.css";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ props }) => {
  // eslint-disable-next-line react/prop-types
  const { city, district, address, area, numberOfBedrooms, rentPrice, images ,_id } =
    props;

    const navigate = useNavigate();

    const handleCardDetails = () => {
      navigate(`/home/${_id}`);
    };

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // eslint-disable-next-line react/prop-types
  const renderImages = images.map((image) => {
    return (
      <div key={image} onClick={handleCardDetails}>
        <img
          className="w-full h-[16rem] rounded-[12px] cursor-pointer"
          src={image}
        />
      </div>
    );
  });

  return (
      <div  className="h-[28rem] flex flex-col gap-y-[0.5rem]">
        <div >
          <Slider {...settings}>{renderImages}</Slider>
        </div>
        <div className="h-[110px] flex flex-col justify-evenly">
          <div  onClick={handleCardDetails} className="text-ellipsis w-full whitespace-nowrap text-[18px] overflow-hidden font-black text-black cursor-pointer hover:opacity-60">
            {city} , {district} , {address}
          </div>
          <ul className="text-lg">
            <li className="flex text-gray-500 font-medium">
              {area}ft/{area * 0.09}sq.m
            </li>
            <li className="flex items-center text-gray-500 font-medium">
              <MdOutlineBedroomParent className="mr-[7px]" />
              {numberOfBedrooms} Bedrooms
            </li>
            <li className="text-black">
              <span className="font-semibold">{rentPrice}</span>$ / night
            </li>
          </ul>
        </div>
      </div>
  );
};

export default RoomCard;
