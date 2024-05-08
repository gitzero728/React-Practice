import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShiftButtonClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="auth-topBar">
        <button>&lt;</button>
        <h3>Prepaire</h3>
      </div>
      <div className="signIn-container">
        <div className="signIn-text-container">
          <h2>Log in</h2>
          <p>Enter your details below</p>
        </div>
        <form className="signIn-content-container" noValidate>
          <div className="input-container">
            <label>Email</label>
            <div className="input-wrapper" style={{ width: "100%" }}>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="youremail@prepaire.com"
              />
            </div>
          </div>
          <div className="input-container">
            <label>Password</label>
            <div
              className="input-wrapper"
              style={{
                width: "100%",
                maxHeight: "46px",
                alignItems: "center",
              }}
            >
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                name="password"
                placeholder="password"
              />
              <button
                type="button"
                style={{
                  display: "flex",
                  padding: "0px",
                  alignItems: "center",
                }}
                onClick={handleShiftButtonClick}
              >
                {showPassword ? "•" : "o"}
              </button>
            </div>
            <div className="signIn-forgotPassword-wrapper">
              <button type="button">Forgot password</button>
            </div>
          </div>
          <div className="signIn-button-wrapper">
            <button className="button-tertiary" type="submit">
              Log in
            </button>
          </div>
        </form>
        <div className="signIn-gotoSignup-wrapper">
          <p>If you don't have an account</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
