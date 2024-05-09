// DataContext.js
import React, { createContext, useContext } from "react";
import data from "./data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
