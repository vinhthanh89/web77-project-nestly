//! Dùng để chứa những hàm liên quan đến user
import { axiosInstance } from "./index.js";


const login = ({ email, password }) => {
  return axiosInstance.post("/user/login", { email, password }); //! Nó sẽ đi vào body
};

const signUp = ({ username, email, password, phone }) => {
  return axiosInstance.post("/user/sign-up", {
    username,
    phone,
    email,
    password,
  });
};

export { login, signUp };
