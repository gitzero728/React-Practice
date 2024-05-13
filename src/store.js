// src/store.js
import { createStore, combineReducers } from "redux";
import imageReducer from "./reducers/imageReducer"; // Import your reducers

// Combine reducers
const rootReducer = combineReducers({
  image: imageReducer,
  // Add other reducers here if you have them
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
