import { Link } from "react-router-dom";
import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import NavigationBar from "../../components/NavigationBar";
import Places from "../../components/Places";
import "./index.css";
const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <NavigationBar />
        <div className="quote flex justify-center items-center bg-transparent h-2/3 ">
          <ul className="flex-wrap justify-center items-center bg-transparent">
            <p className="bg-transparent text-7xl text-white">
              Affordable, Diverse, Convenient
            </p>
          </ul>
        </div>
        {/* <Places />
          <AboutUs />
          <Footer /> */}
      </div>
    </>
  );
};
export default LandingPage;
