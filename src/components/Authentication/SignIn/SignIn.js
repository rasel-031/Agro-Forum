import React, { useState } from "react";
import "./Signin.scss";
import "../../Form/Input.scss";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form className="signin-form-container">
        <div className="input-container">
          <label htmlFor="" className="input-label">
            Email
            <span>*</span>
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="Email"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="" className="input-label">
            Password
            <span>*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="input-field"
            placeholder="Password"
            required
          />
        </div>
        <div className="input-checkbox">
          <input
            type="checkbox"
            onClick={() => setShowPassword(!showPassword)}
          />
          <span>&nbsp;Show password</span>
        </div>
        <br />
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
