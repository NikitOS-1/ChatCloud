// categorySlice.js
import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    selectedCategories: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.selectedCategories = [...state.selectedCategories, action.payload];
    },
    removeCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        (category) => category !== action.payload
      );
    },
    clearCategories: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const { addCategory, removeCategory, clearCategories } =
  categorySlice.actions;

export const selectSelectedCategories = (state) =>
  state.category.selectedCategories;

export default categorySlice.reducer;
