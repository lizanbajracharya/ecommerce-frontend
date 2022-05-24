import axios from "axios";

export const register = async (userData) => {
  const { data } = await axios.post("/api/users", userData);
  return data;
};
