import Footer from "../../components/Footer";
import Header from "../../components/Footer";
import AboutUs from "./components/AboutUs";
import Places from "./components/Places";

const Home = () => {
  return (
    <>
          <div className="w-screen h-screen">
              <Header/>
              <h1>Home page</h1>
              <Places/>
              <AboutUs />
              <Footer/>
      </div>
    </>
  );
};
export default Home;
