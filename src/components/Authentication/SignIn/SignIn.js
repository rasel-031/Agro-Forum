import React, { useState } from "react";
import "./Signin.scss";
import "../../Form/Input.scss";
import { Form, Field } from "react-final-form";
import {
  composeValidators,
  required,
  emailCheck,
} from "../../Form/FormValidation";
import { useSelector, useDispatch } from "react-redux";
import { loginUserRequest } from "../../../redux/user/userActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData.login);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values) => {
    dispatch(loginUserRequest(values));
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className="signin-form-container" onSubmit={handleSubmit}>
            <Field
              name="email"
              validate={composeValidators(required, emailCheck)}
            >
              {({ input, meta }) => (
                <div className="input-container">
                  <label htmlFor="" className="input-label">
                    Email
                    <span>*</span>
                  </label>
                  <input
                    {...input}
                    type="text"
                    className="input-field"
                    placeholder="Email"
                  />
                  {meta.error && meta.touched && (
                    <span className="input-validate">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="password" validate={required}>
              {({ input, meta }) => (
                <div className="input-container">
                  <label htmlFor="" className="input-label">
                    Password
                    <span>*</span>
                  </label>
                  <input
                    {...input}
                    type={showPassword ? "text" : "password"}
                    className="input-field"
                    placeholder="Password"
                  />
                  {meta.error && meta.touched && (
                    <span className="input-validate">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <div className="input-checkbox">
              <Field
                name="show-password"
                component="input"
                type="checkbox"
                onClick={() => setShowPassword(!showPassword)}
              />
              <span>&nbsp;Show password</span>
            </div>
            <br />
            <button>Sign In</button>
          </form>
        )}
      />
    </div>
  );
};

export default SignIn;
