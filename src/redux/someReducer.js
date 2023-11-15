import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const someSlice = createSlice({
  name: "some",
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
  },
});

export const { inc } = someSlice.actions;
export default someSlice.reducer;
