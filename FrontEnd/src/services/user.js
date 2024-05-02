//! Dùng để chứa những hàm liên quan đến user
import { axiosInstance, axiosInstanceAuth } from "./index.js";


export const login = ({ email, password }) => {
  return axiosInstance.post("/user/login", { email, password }); //! Nó sẽ đi vào body
};

export const signUp = ({ username, email, password, phone }) => {
  return axiosInstance.post("/user/sign-up", {
    username,
    phone,
    email,
    password,
  });
};

export const getUserData = () => {
  return axiosInstanceAuth.get('/user/get-user')
}

export const getUserById = (userId) => {
  return axiosInstanceAuth.get(`/user/get-user-by-id/${userId}`);
};

export const editUser = (userId , formData ) => {
  return axiosInstanceAuth.put(`/user/edit/${userId}` , formData )
}

export const deleteUser = (userId) => {
  return axiosInstanceAuth(`/user/delete/${userId}`)
}

export const refreshAccessToken = () => {
  return axiosInstance.get('/user/refresh-accesstoken')
}


