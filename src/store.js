import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./features/imageSlice";

const store = configureStore({
  reducer: {
    image: imageReducer,
  },
});

export default store;
