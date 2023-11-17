import { createSlice } from "@reduxjs/toolkit";

const avatarSlice = createSlice({
  name: "avatar",
  initialState: {
    selectedAvatarID: null,
  },
  reducers: {
    selectAvatar: (state, action) => {
      state.selectedAvatarID = action.payload;
    },
  },
});

export const { selectAvatar } = avatarSlice.actions;
export const selectSelectedAvatar = (state) => state.avatar.selectedAvatarID;
export default avatarSlice.reducer;
