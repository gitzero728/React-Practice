// src/actions/imageActions.js
import { SELECT_IMAGE } from "./types";

export const selectImage = (index) => {
  return {
    type: SELECT_IMAGE,
    payload: index,
  };
};
