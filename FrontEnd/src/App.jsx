import "./App.css";
import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import isObjectEmpty from "./utils/isObjectEmpty";
import AuthLayout from "./layouts/AuthLayout";
import NonAuthLayout from "./layouts/NonAuthLayout";
import LandingPage from "./pages/LandingPage/index.jsx";
import Home from "./pages/Home/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";
import Login from "./pages/Login";
import CardDetails from "./pages/CardDetails";
import Dashboard from "./pages/Dashboard/index.jsx";
function App() {
  const user = useSelector((state) => state.users.user);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card-detail" element={<CardDetails />} />
        <Route path='/authlayout' element={<AuthLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
        {isObjectEmpty(user) ? (
          <Route path="" element={<NonAuthLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route path="/home" element={<Home />} />
            
            
          </Route>
        )}
      </Routes>
    </>
  );
  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<LandingPage />} />
  //       <Route path="/home" element={<Home />} />
  //       <Route path="/sign-up" element={<SignUp />} />
  //       <Route path="/login" element={<Login />} />
  //     </Routes>
  //   </>
  // );
}

export default App;
