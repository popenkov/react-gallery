import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  image: {},
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setSingleImage: (state, action) => {
      state.image = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setCertainImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const { setImages, setSingleImage, setCertainImages } =
  imageSlice.actions;

export default imageSlice.reducer;
