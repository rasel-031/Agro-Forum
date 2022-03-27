import userModel from "../models/user.model.js";

export const userValidation = async ({ email }) => {
  try {
    const response = await userModel.find({ email });
    return response;
  } catch (error) {
    return error;
  }
};
