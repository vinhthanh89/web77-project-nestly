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
  name: "users",
  initialState,
  //todo Reducers dùng để cập nhật
  //! 2 params: state, action
  reducers: {
    login: (state, action) => {
      //! Cập nhật lại user
      state.user = action.payload.user;
      //! Sau khi đăng nhập, ta cập nhật data như sau
    },
    
    logout: (state) => {
      state.user = {};
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
    },

    edit: (state , action) => {
      state.user = action.payload.user
      console.log(state , action.payload);
    }
  },
});

//! Export login theo dạng như sau
export const { login, logout , edit } = userSlice.actions;
export default userSlice.reducer;
