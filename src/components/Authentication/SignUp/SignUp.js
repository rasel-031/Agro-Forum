import React, { useState } from "react";
import "../../Form/Input.scss";
import "./SignUp.scss";
import { Form, Field } from "react-final-form";
import {
  required,
  emailCheck,
  composeValidators,
  passwordCheck,
} from "../../Form/FormValidation";
import { useDispatch } from "react-redux";
import { registerUserRequest } from "../../../redux/user/userActions";

const SignUp = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values) => {
    dispatch(registerUserRequest(values));
  };

  return (
    <>
      <div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className="signup-form-container" onSubmit={handleSubmit}>
              <Field name="name" validate={required}>
                {({ input, meta }) => (
                  <div className="input-container">
                    <label htmlFor="" className="input-label">
                      Name
                      <span>*</span>
                    </label>
                    <input
                      {...input}
                      type="text"
                      className="input-field"
                      placeholder="Name"
                    />
                    {meta.error && meta.touched && (
                      <span className="input-validate">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
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
              <Field
                name="password"
                validate={composeValidators(required, passwordCheck)}
              >
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
              <button type="submit">Sign Up</button>
            </form>
          )}
        />
      </div>
    </>
  );
};

export default SignUp;
