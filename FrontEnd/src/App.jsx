import "./App.css";
import { Routes, Route } from "react-router";
// import { Toaster } from "react-hot-toast";
// import { userSelector } from "react-redux";
// import isObjectEmpty from "./utils/isObjectEmpty";
// import AuthLayout from "./layouts/AuthLayout";
// import NonAuthLayout from "./layouts/NonAuthLayout";
import LandingPage from "./pages/LandingPage/index.jsx";
import Home from "./pages/Home/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import Login from "./pages/Login";
import TodoCard from "./pages/TodoCard";
function App() {
  // const user = userSelector((state) => state.users.user);
  // return (
  //   <>
  //     <Toaster />
  //     <Routes>
  //       {isObjectEmpty(user) ? (
  //         <Route path="/" element={<NonAuthLayout />}>
  //           <Route path="/landing-page" element={<LandingPage />} />
  //         </Route>
  //       ) : (
  //         <Route path="/" element={<AuthLayout />}>
  //           <Route path="" element={<Home />} />
  //         </Route>
  //       )}
  //     </Routes>
  //   </>
  // );


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo-card" element={<TodoCard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
