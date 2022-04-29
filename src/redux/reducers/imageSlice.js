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
  },
});

export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;
