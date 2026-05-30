import axios from "./axios";

export const getEvents = async () => {
  const res = await axios.get("/events");
  return res.data;
};

export const getEventById = async (id) => {
  const res = await axios.get(`/events/${id}`);
  return res.data;
};