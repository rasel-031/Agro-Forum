import {
  REGISTERED_SUCCESS,
  REGISTERED_FAILED,
  REGISTERED_EXIST,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from "../utils/Message.utils.js";
import userModel from "../models/user.model.js";
import { userValidation } from "../validation/user.validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userSignUp = async (req, res) => {
  try {
    //user validation check
    const isValidate = await userValidation(req.body);
    if (isValidate && isValidate.length > 0) {
      return res.send(JSON.stringify(REGISTERED_EXIST));
    }
    //create new user
    const data = req.body;
    const user = new userModel(data);
    await user.save();
    return res.send(JSON.stringify(REGISTERED_SUCCESS));
  } catch (error) {
    return res.send(JSON.stringify(REGISTERED_FAILED));
  }
};

export const userSignIn = async (req, res) => {
  try {
    //user validation check
    const isValidate = await userValidation(req.body);
    if (isValidate && isValidate.length > 0) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        isValidate[0].password
      );
      if (!isValidPassword) return res.send(JSON.stringify(AUTH_FAILED));
      //authentication success
      const token = jwt.sign(
        {
          id: isValidate[0]._id,
          email: isValidate[0].email,
          name: isValidate[0].name,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "12h" }
      );
      return res.send(JSON.stringify({ access_token: token, ...AUTH_SUCCESS }));
    }
  } catch (error) {
    return res.send(JSON.stringify(AUTH_FAILED));
  }
};
