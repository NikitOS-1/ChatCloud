import { configureStore } from "@reduxjs/toolkit";
import avatarSlice from "./slices/avatarSlice";
import categorySlice from "./slices/categorySlice";
import userNameSlice from "./slices/userNameSlice";
import countrySlice from "./slices/countrySlice";

export const store = configureStore({
  reducer: {
    avatar: avatarSlice,
    category: categorySlice,
    userName: userNameSlice,
    country: countrySlice,
  },
});
