import React, { useState, useRef } from "react";
import "../../Form/Input.scss";
import "./SignUp.scss";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formId = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("name", formData.get("name"));
    console.log(formData);
  };

  return (
    <div>
      <form
        className="signup-form-container"
        onSubmit={handleSubmit}
        ref={formId}
      >
        <div className="input-container">
          <label htmlFor="" className="input-label">
            Name
            <span>*</span>
          </label>
          <input
            type="text"
            name="name"
            className="input-field"
            placeholder="Name"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="" className="input-label">
            Email
            <span>*</span>
          </label>
          <input
            type="text"
            name="email"
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
            name="password"
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
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
