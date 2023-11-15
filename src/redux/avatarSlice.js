import { createSlice } from "@reduxjs/toolkit";

const avatarSlice = createSlice({
  name: "avatar",
  initialState: {
    selectedAvatar: null,
  },
  reducers: {
    selectAvatar: (state, action) => {
      state.selectedAvatar = action.payload;
    },
  },
});

export const { selectAvatar } = avatarSlice.actions;
export const selectSelectedAvatar = (state) => state.avatar.selectedAvatar;
export default avatarSlice.reducer;
