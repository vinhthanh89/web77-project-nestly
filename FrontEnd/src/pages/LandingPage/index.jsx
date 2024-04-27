import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./index.css";
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        {/* Top container */}

        <div className="top-container h-[100vh]">
          <NavigationBar />
          <div className="quote mt-[8rem]">
            <ul className="flex-col justify-center text-center">
              <h1 className="neon_1 text-7xl text-white">
                Affordable Diverse Convenient
              </h1>
              <p className="neon_2 text-xl text-black font-semibold mt-8">
                Welcome to Nestly, a web platform designed for those seeking a
                place they can call HOME
              </p>
            </ul>
            {/* Button */}
            <div className="btn-holder w-full flex justify-center mt-8 opacity-95">
              <button className="skeleton btn md:btn-md text-white hover:opacity-100">
                <FaLongArrowAltRight className="text-black" />
                <Link>
                  <p className="pb-1 text-black neon_2">Try Nestly now!</p>
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* About us */}
        <div className="bg-white flex justify-center">
          <div className="w-[90%] flex justify-center bot">
            {/* about us */}
            <div className="w-1/2 pt-[5rem] pr-[3rem]">
              <h3 className="text-xl text-blue-500 font-bold">About us</h3>
              <h1 className="text-5xl text-black font-medium mt-[1rem]">
                Who are we?
              </h1>
              <p className="text-lg mt-5 font-medium leading-10">
                We are Nestly! A dedicated team that providing homes and
                apartments that not only offer unparalleled comfort and
                affordability but also resonate with warmth and a sense of
                belonging. With a commitment to fostering communities and
                enriching lives, Nestly welcomes you to explore our selection of
                thoughtfully designed to elevate your living experience.
              </p>
            </div>
            {/* image */}
            <div>
              <img
                src="/assets/aboutus.jpg"
                alt=""
                className="w-[30rem] h-[30rem]"
              />
            </div>
          </div>
        </div>
        {/* information */}
        <div className="section bg-white pt-[7rem] pb-[10rem]">
          <h3 className="flex justify-center text-xl text-blue-500 font-bold">
            Why choose us
          </h3>
          <div className="small-sections w-full flex justify-center">
            <div className="img-holder w-1/3">
              <h1 className="text-5xl text-black font-medium mt-[1rem]">
                Sustainable
              </h1>
              <img src="/assets/Display_4.jpg" alt="" />
              <p className="text-center text-lg mt-5 font-medium leading-10">
                We prioritize sustainability in every home, offering
                eco-friendly options without compromising comfort.
              </p>
            </div>

            <div className="img-holder w-1/3">
              <h1 className="text-5xl text-black font-medium mt-[1rem]">
                Affordable
              </h1>
              <img src="/assets/Display_5.jpg" alt="" />
              <p className="text-center text-lg mt-5 font-medium leading-10">
                Range of affordable options makes homeownership achievable
                without sacrificing quality and income.
              </p>
            </div>

            <div className="img-holder w-1/3">
              <h1 className="text-5xl text-black font-medium mt-[1rem]">
                Happiness
              </h1>
              <img src="/assets/Display_2.jpg" alt="" />
              <p className="text-center text-lg mt-5 font-medium leading-10">
                We believe in creating environments where families can thrive
                and make lasting memories, fostering joy.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default LandingPage;
