import { configureStore } from "@reduxjs/toolkit";
import avatarSlice from "./avatarSlice";

export const store = configureStore({
  reducer: {
    avatar: avatarSlice,
  },
});
