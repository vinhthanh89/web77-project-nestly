import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
          className="w-full h-[18rem] rounded-[12px] cursor-pointer ring-1"
          src={image}
        />
      </>
    );
  });

  return (
    <div className="w-[20rem] h-[30rem] flex flex-col gap-y-[10px]">
      <div className="w-full">
        <Slider {...settings}>{renderImages}</Slider>
      </div>
      <div className="h-[120px] flex flex-col justify-evenly">
        <div className="text-ellipsis w-full whitespace-nowrap text-[18px] overflow-hidden font-black text-black">
          {city} , {district} , {address}
        </div>
        <div>
          <p className="text-black">Area: {area} ft</p>
          <p className="text-black">BedRoom: {numberOfBedrooms}</p>
          <p className="text-black">
            <span className="font-semibold">{rentPrice}</span>$/night
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
