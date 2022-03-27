import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
  userData: userReducer,
});
