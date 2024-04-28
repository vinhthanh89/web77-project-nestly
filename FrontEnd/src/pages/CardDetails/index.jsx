import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../../components/Header/index';
import Footer from '../../components/Footer';

const CardDetails = () => {
  // const { cardId } = useParams();
  // const [card, setCard] = useState(null);

  // useEffect(() => {
  //   const fetchRoomData = async () => {
  //     try {
  //       const response = await axios.get(`/room/get-rooms/${cardId}`)
  //       setCard(response.data)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   };

  //   fetchRoomData()

    
  //   return () => {
  //     setCard(null); 
  //   };
  // }, [cardId]);

  
  // const { city, district, address, area, numberOfBedrooms, rentPrice, images } = card;

  return (
    <>
    <Header/>
    <div className="w-full mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      {/* <img className="w-full h-auto rounded-t-xl" src={images[0]} alt="Room" /> */}
      
      <div className="p-6">
        <h2 className="text-xl font-semibold">hcm</h2>
        <p className="text-gray-600">163/14/6</p>
        <p className="mt-2">Area: dnm sq ft</p>
        <p>Bedrooms: 6</p>
        <p className="mt-2">
          Rent Price: <span className="font-semibold">65</span> / night
        </p>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold">Images</h3>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* {images.map((image, index) => (
            <img key={index} className="w-full h-auto rounded-md" src={image} alt={`Image ${index}`} />
          ))} */}
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
    
  );
};

export default CardDetails;
