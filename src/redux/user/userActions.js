import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "./userActionsType";

export const registerUserRequest = (registerData) => {
  return {
    type: REGISTER_USER_REQUEST,
    meta: "Regiseter data request",
    payload: registerData,
  };
};

export const registerUserSuccess = (data) => {
  return {
    type: REGISTER_USER_SUCCESS,
    meta: "Register data success",
    payload: data,
  };
};

export const registerUserFailure = (error) => {
  return {
    type: REGISTER_USER_FAILURE,
    meta: "Register data failure",
    payload: error,
  };
};
