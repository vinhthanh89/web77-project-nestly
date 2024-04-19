import AboutUs from "../../components/AboutUs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Places from "../../components/Places";
import "./index.css";
const LandingPage = () => {
  return (
    <>

      <div className="landing-page w-full h-screen">
        <Header />
        <div className="container">
          <Places />
          <AboutUs />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
