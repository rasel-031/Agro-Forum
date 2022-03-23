export const required = (value) => (value ? undefined : `Field required*`);

export const emailCheck = (value) =>
  value.slice(-10) === "@gmail.com" ? undefined : `Email invalid*`;

export const passwordCheck = (value) =>
  value.length >= 6 ? undefined : `Must be 6 charecter long*`;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
