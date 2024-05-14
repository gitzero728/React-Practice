import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import "./App.css";
import Home from "./components/Home";
import LoginPage from "./pages/Login";
import ZeroAvatarPage from "./pages/ZeroAvatar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/ZeroAvatar" element={<ZeroAvatarPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
