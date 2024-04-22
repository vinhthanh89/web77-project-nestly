//! Dùng để chứa những hàm liên quan đến user
import { axiosInstance, axiosInstanceAuth } from "./index.js";
const login = ({ email, password }) => {
  return axiosInstance.post("/login", { email, password }); //! Nó sẽ đi vào body
};

const signUp = ({ name, email, password }) => {
  return axiosInstance.post("/sign-up", { name, email, password });
};

const createUser = (data) => {
  return axiosInstanceAuth.post(`/user/create-user`, data);
};

const getUserById = (userId) => {
  return axiosInstanceAuth.get(`/user/${userId}`);
};
export {
  login,
  signUp,
  createUser,
  getUserById,
};
