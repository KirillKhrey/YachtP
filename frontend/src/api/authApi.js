import api from "./axios";

export const loginRequest = (data) => api.post("/login", data);
export const registerRequest = (data) => api.post("/register-request", data);
export const logoutRequest = () => api.post("/logout");
export const meRequest = () => api.get("/me");