import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link className="App-link" to="/Login">
          Press this
        </Link>
      </header>
    </div>
  );
}
