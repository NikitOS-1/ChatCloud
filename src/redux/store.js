import { configureStore } from "@reduxjs/toolkit";
import someReducer from "./someReducer";

export const store = configureStore({
  reducer: {
    some: someReducer,
  },
});
