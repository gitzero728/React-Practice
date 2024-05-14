import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Home from "./components/Home";
import LoginPage from "./pages/Login";
import ZeroAvatarPage from "./pages/ZeroAvatar";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/ZeroAvatar" element={<ZeroAvatarPage />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
