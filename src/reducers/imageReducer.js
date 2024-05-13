// src/reducers/imageReducer.js
import { SELECT_IMAGE } from "../actions/types";

const initialState = {
  selectedIndex: null,
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    default:
      return state;
  }
};

export default imageReducer;
