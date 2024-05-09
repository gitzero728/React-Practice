// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import LoginPage from "./pages/Login";
import ZeroAvatarPage from "./pages/ZeroAvatar";
import data from "./data";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/ZeroAvatar" element={<ZeroAvatarPage />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
