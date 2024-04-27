import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

import "./style.css";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ props }) => {
  // eslint-disable-next-line react/prop-types
  const { city, district, address, area, numberOfBedrooms, rentPrice, images } =
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
      <>
        <img
          className="w-full h-[170px] rounded-[12px] cursor-pointer"
          src={image}
        />
      </>
    );
  });

  return (
    <div className="w-[300px] h-[300px] flex flex-col gap-y-[10px]">
      <div className="w-full h-[180px]">
        <Slider {...settings}>{renderImages}</Slider>
      </div>
      <Link to={`/card-list/${props._id}`}>
        {props.title}
      </Link>
      <div className="h-[120px] flex flex-col justify-evenly">
        <div className="text-ellipsis w-full whitespace-nowrap text-[18px] overflow-hidden font-bold" >
            {city} , {district} , {address}
        </div>
        <div>
          <p>Area : {area} ft</p>
          <p>BedRoom : {numberOfBedrooms}</p>
          <p><span className="font-semibold">{rentPrice}</span>$ / night</p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
