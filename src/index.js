import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider } from "./DataContext";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
        <App />
      </DataProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
