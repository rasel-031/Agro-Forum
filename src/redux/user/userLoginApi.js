import axios from "axios";

export const userLoginApi = async (loginData) => {
  const response = await axios.post(
    "http://localhost:5000/user/signin",
    loginData
  );
  const data = response.data;
  return data;
};
