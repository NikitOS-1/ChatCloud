import { configureStore } from "@reduxjs/toolkit";
import avatarSlice from "./avatarSlice";
import categorySlice from "./categorySlice";

export const store = configureStore({
  reducer: {
    avatar: avatarSlice,
    category: categorySlice,
  },
});
