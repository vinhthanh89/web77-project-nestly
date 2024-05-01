import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link, useNavigate } from "react-router-dom"
import { MdOutlineBedroomParent } from "react-icons/md";
import { CiRuler } from "react-icons/ci";
import "./style.css";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ props }) => {
  // eslint-disable-next-line react/prop-types
  const { city, district, address, area, numberOfBedrooms, rentPrice, images} =
    props;

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
      <div key={image}>
        <img
          className="w-full h-[15rem] rounded-[12px] cursor-pointer"
          src={image}
        />
      </div>
    );
  });

  const navigate = useNavigate()
  const handleCardDetails = () => {
    navigate(`/card-detail`)
  }

  return (
<<<<<<< HEAD
    <div className="card h-[26rem] flex flex-col gap-y-[0.5rem] p-[1rem]">
=======

    <div onClick={handleCardDetails}>
 

    <div className="h-[28rem] flex flex-col gap-y-[0.5rem]">
>>>>>>> 4fc54df687fbde80118608eb5f3f1c659e539a51
      <div>
        <Slider {...settings}>{renderImages}</Slider>
      </div>
      <Link to={`/card-list/${props._id}`}>{props.title}</Link>
      <div className="h-[110px] flex flex-col justify-evenly">

        <div className="text-ellipsis w-full whitespace-nowrap text-[18px] overflow-hidden font-black text-black">
          {city}, {district}, {address}
        </div>
        <ul className="flex gap-[0.5rem] text-sm">
          <li className="flex items-center text-gray-500 font-medium gap-1">
            <MdOutlineBedroomParent />
            {numberOfBedrooms} Bedrooms
          </li>
          <li className="flex items-center text-gray-500 font-medium gap-1">
            <CiRuler />
            {area}ft/{area * 0.09}sq.m
          </li>
        </ul>
        <p className="text-black text-xl">
          <span className="font-semibold">{rentPrice}</span>$ / night
        </p>
      </div>
    </div>
    </div>
    
  );
};

export default RoomCard;
