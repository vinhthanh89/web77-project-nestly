import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './../../components/Header/index';
import Footer from '../../components/Footer';



const CardDetails = () => {
  const { id } = useParams();
  const [roomDetail, setRoomDetail] = useState(null);

  useEffect(() => {
    const getRoomDetail = async () => {
      try {
        // Gọi API để lấy thông tin chi tiết của phòng dựa trên id
        const response = await fetchRoomData(id);
        setRoomDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRoomDetail();
  }, [id]);

  if (!roomDetail) {
    return <div>Loading...</div>;
  }


  return (


    <>
      <Header />
      <div className="w-f mx-auto bg-white rounded-xl overflow-hidden shadow-md text-black">

        <div className="pl-[150px] pr-[150px] m-10">

          {/* img */}
          <div className=" flex w-full ">
            <div className="w-1/2 h-[550px] mr-2">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaLK8D2uKRXlYSNU7oKuaLAjW7k8rKAVRALfB7zqWjw&s" alt="Hình ảnh" className="h-full rounded-tl-xl rounded-bl-xl " ></img>
            </div>
            <div className=" w-1/2 h-[550px] ml-2">
              <div className="h-full grid grid-cols-2 ">
                <div className="grid grid-cols-1 pr-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaLK8D2uKRXlYSNU7oKuaLAjW7k8rKAVRALfB7zqWjw&s" alt="Hình ảnh" className="h-full w-full pb-2" ></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaLK8D2uKRXlYSNU7oKuaLAjW7k8rKAVRALfB7zqWjw&s" alt="Hình ảnh" className="h-full w-full pt-2" ></img>
                </div>
                <div className="grid grid-cols-1 pl-2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaLK8D2uKRXlYSNU7oKuaLAjW7k8rKAVRALfB7zqWjw&s" alt="Hình ảnh" className="h-full w-full pb-2 rounded-tr-xl" ></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAaLK8D2uKRXlYSNU7oKuaLAjW7k8rKAVRALfB7zqWjw&s" alt="Hình ảnh" className="h-full w-full pt-2 rounded-br-xl" ></img>
                </div>
              </div>
              {/* <p className="h-full rounded-xl bg-gray-600"></p> */}
            </div>
          </div>

          <div className="flex mt-4">

            <div className="truncate overflow-ellipsis w-8/12 ">

              <p className="text-2xl font-semibold">Địa điểm nghỉ dưỡng tại </p>
              <p>Bedrooms: 6</p>
              <p className="pt-3 font-semibold text-xl">Chủ nhà:</p>
              <p className="text-gray-400">Chủ nhà chất lượng, 10 năm kinh nghiệm đón tiếp khách</p>
              <p className="mt-6 bg-gray-200 inline-block p-4 rounded-lg">
                description
              </p>
              <h3 className="pt-10 text-lg font-semibold">Chi tiết nơi bạn sẽ nghỉ dưỡng</h3>


            </div>

            <div className="w-4/12">
              <div className="bg-gray-200 border-5 border-black rounded-lg shadow-xl p-6 w-full h-full">
                <div className="flex w-full h-auto">
                <p className="font-semibold text-2xl">$168</p>
                <p className="mt-[7px]">/đêm</p>
                </div>
                <div className="mt-3">ngày nhận phòng / ngày trả phòng</div>
                <p className="mt-3 font-semibold text-2xl flex items-center justify-center">Tổng: $168</p>
                <button class="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 w-full rounded-lg transition duration-300 ease-in-out">
  Đặt phòng
</button>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>


      

    </>

  );
};

export default CardDetails;
