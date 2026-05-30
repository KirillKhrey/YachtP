import { useState } from "react";
import "./AuthPage.css";
import logo from "../../assets/icons/yacht_logo.svg";

import { loginRequest, registerRequest } from "../../api/authApi";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // login | register

  // login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register state
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
        const res = await loginRequest({ email, password });

        localStorage.setItem("token", res.data.token);

        window.location.href = "/";
    } catch (err) {
        console.error(err.response?.data || err);
    }
    };

    const handleRegister = async (e) => {
    e.preventDefault();

    try {
        await registerRequest(reg);

        alert("Заявка отправлена");
        setMode("login");
    } catch (err) {
        console.error(err.response?.data || err);
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

        {/* LOGIN */}
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

        {/* REGISTER */}
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