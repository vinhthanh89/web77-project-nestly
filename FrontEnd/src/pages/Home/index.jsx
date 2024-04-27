import {Button} from "antd"
import Places from "../../components/Places";
import { removeTokenFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localstorage";
import CardList from "../../components/CardList";

const Home = () => {
  const handleLogOut = () => {
    removeTokenFromLocalStorage();
    removeUserFromLocalStorage()
  }

  return (
      <div className="home-page">
        {/* <Places /> */}
        <Button onClick={handleLogOut}>Logout</Button>
        <CardList />
      </div>
  );
};
export default Home;
