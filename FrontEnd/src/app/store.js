import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
export const store = configureStore({
  reducer: {
    users: userReducer,
  }, //! So sánh mới và cũ
});
