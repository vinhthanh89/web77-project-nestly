import axios from "axios";
import { API_URL } from "../config";
import {
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../utils/localstorage";

//! API with no token
const axiosInstance = axios.create({
  baseURL: API_URL,
});
//! API with token
const axiosInstanceAuth = axios.create({
  baseURL: API_URL,
});

//! Trước khi gọi request, phải đi qua đây để lấy token
axiosInstanceAuth.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getTokenFromLocalStorage()}`;
  return config;
});
export { axiosInstance, axiosInstanceAuth };

//! Cho user sign out khi token hết hạn ( set token time )
axiosInstanceAuth.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error.response.status == 401) {
      removeTokenFromLocalStorage();
      removeUserFromLocalStorage();
      window.location.href = "/login";
    }
  }
);

//! Ta có thể tạo nhiều instances ( attributes )
