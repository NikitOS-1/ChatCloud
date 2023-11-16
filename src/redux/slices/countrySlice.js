import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
  name: "country",
  initialState: {
    country: "UA",
  },
  reducers: {
    updateCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export const { updateCountry } = countrySlice.actions;
export const selectCountry = (state) => state.country.country;
export default countrySlice.reducer;
