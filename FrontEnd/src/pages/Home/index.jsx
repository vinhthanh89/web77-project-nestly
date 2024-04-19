import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import Places from "../../components/Places";
const Home = () => {
  return (
    <>
      <Header />
      <div className="w-screen">
        <h1>Home page</h1>
      </div>
      <Places />
      <AboutUs />
      <Footer />
    </>
  );
};
export default Home;
