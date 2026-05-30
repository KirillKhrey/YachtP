import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { meRequest } from "../api/authApi";
import { setUser, logout } from "../store/authSlice";

export default function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    meRequest()
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch(() => {
        dispatch(logout());
      });
  }, [dispatch]);

  return null;
}