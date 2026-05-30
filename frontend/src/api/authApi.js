import api from "./axios";

export const loginRequest = (data) => {
  return api.post("/login", data);
};

export const registerRequest = (data) => {
  return api.post("/register-request", data);
};