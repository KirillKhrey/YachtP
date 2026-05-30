import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AuthPage.css";
import logo from "../../assets/icons/yacht_logo.svg";

import {
  loginRequest,
  registerRequest,
  csrf,
  meRequest,
} from "../../api/authApi";

import { setUser } from "../../store/authSlice";

export default function AuthPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [reg, setReg] = useState({
    email: "",
    password: "",
    full_name: "",
    study_group: "",
    phone: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await csrf(); // ❗ ОБЯЗАТЕЛЬНО Sanctum

      await loginRequest({ email, password });

      const me = await meRequest();

      dispatch(setUser(me.data));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await csrf(); // тоже нужно

      await registerRequest(reg);

      alert("Заявка отправлена");
      setMode("login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="auth-logo">
          <img src={logo} className="logo-icon" />
          <h2>Яхт-клуб МП</h2>
          <p>Московский Политех</p>
        </div>

        <div className="auth-tabs">
          <button
            className={mode === "login" ? "active" : ""}
            onClick={() => setMode("login")}
          >
            Вход
          </button>

          <button
            className={mode === "register" ? "active" : ""}
            onClick={() => setMode("register")}
          >
            Регистрация
          </button>
        </div>

        {mode === "login" && (
          <form className="auth-form" onSubmit={handleLogin}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="submit-btn">Войти</button>
          </form>
        )}

        {mode === "register" && (
          <form className="auth-form" onSubmit={handleRegister}>
            <label>Email</label>
            <input
              value={reg.email}
              onChange={(e) =>
                setReg({ ...reg, email: e.target.value })
              }
              required
            />

            <label>Пароль</label>
            <input
              type="password"
              value={reg.password}
              onChange={(e) =>
                setReg({ ...reg, password: e.target.value })
              }
              required
            />

            <label>ФИО</label>
            <input
              value={reg.full_name}
              onChange={(e) =>
                setReg({ ...reg, full_name: e.target.value })
              }
              required
            />

            <label>Учебная группа</label>
            <input
              value={reg.study_group}
              onChange={(e) =>
                setReg({ ...reg, study_group: e.target.value })
              }
              required
            />

            <label>Телефон</label>
            <input
              value={reg.phone}
              onChange={(e) =>
                setReg({ ...reg, phone: e.target.value })
              }
              required
            />

            <button className="submit-btn">
              Подать заявку
            </button>
          </form>
        )}
      </div>
    </div>
  );
}