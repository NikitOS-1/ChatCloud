import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
  name: "userName",
  initialState: {
    userName: null,
  },
  reducers: {
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { updateUserName } = userNameSlice.actions;
export const enteredUserName = (state) => state.userName.userName;
export default userNameSlice.reducer;
