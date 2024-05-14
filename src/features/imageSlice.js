import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIndex: -1,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    selectImage: (state, action) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { selectImage } = imageSlice.actions;
export default imageSlice.reducer;
