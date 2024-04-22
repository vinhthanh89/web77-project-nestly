import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localstorage";

//! State ban đầu
const initialState = {
  user: getUserFromLocalStorage(),
};

//! name là tên của reducer
export const userSlice = createSlice({
  name: "user",
  initialState,
  //todo Reducers dùng để cập nhật
  //! 2 params: state, action
  reducers: {
    login: (state, action) => {
      // console.log(action) // Check lại
      console.log(action.payload.user); //! Lấy user
      //! Cập nhật lại user
      state.user = action.payload.user; //! Sau khi đăng nhập, ta cập nhật data như sau
    },
    logout: (state, action) => {
      state.user = {};
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
    },
  },
});

//! Export login theo dạng như sau
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
