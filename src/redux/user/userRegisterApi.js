import axios from "axios";

export const userRegisterApi = async (registerData) => {
  const response = await axios.post(
    "http://localhost:5000/user/signup",
    registerData
  );
  const data = response.data;
  return data;
};
