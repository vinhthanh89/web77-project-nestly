import {Button} from "antd"
import Places from "../../components/Places";
import { removeTokenFromLocalStorage } from "../../utils/localstorage";
const Home = () => {
  return (
    <>
      <div className="home-page">
        <Places />
        <Button onClick={removeTokenFromLocalStorage()}>Logout</Button>
      </div>
    </>
  );
};
export default Home;
