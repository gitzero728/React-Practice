import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Link className="App-link" to="/login">
          Press this
        </Link>
      </header>
    </div>
  );
}
