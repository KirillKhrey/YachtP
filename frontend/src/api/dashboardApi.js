import axios from "./axios";

export const getDashboard = async () => {
  const res = await axios.get("/dashboard");
  return res.data;
};