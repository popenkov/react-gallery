import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setCertainImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setImages, setCertainImages } = imageSlice.actions;

export default imageSlice.reducer;
