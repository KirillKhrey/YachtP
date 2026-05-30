import { useState } from "react";
import "../../styles/header.css";
import logo from "../../assets/icons/yacht_logo.svg";
import SunIcon from "../../assets/icons/sun.svg";
import MoonIcon from "../../assets/icons/moon.svg";
import BellIcon from "../../assets/icons/bell.svg";

export default function Header() {
  const [theme, setTheme] = useState("light");
  const [notifOpen, setNotifOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <header className="header">
      <div className="header-container">

        <a href="/" className="header-logo">
          <img src={logo} className="header-logo-icon" />
          <div className="header-logo-text">
            <span className="header-title">Яхт-клуб</span>
            <span className="header-subtitle">Московский Политех</span>
          </div>
        </a>

        <div className="header-actions">

          <button className="header-icon-btn" onClick={toggleTheme}>
            <img
              src={theme === "dark" ? SunIcon : MoonIcon}
            />
          </button>

          {/* notifications */}
          <div className="notification-wrapper">
            <button
              className="header-icon-btn"
              onClick={() => setNotifOpen(!notifOpen)}
            >
              <img src={BellIcon} />
            </button>

            {notifOpen && (
              <div className="notification-dropdown">
                <div className="notification-header">Уведомления</div>
                <div className="notification-list"></div>
                <button className="notification-read-btn">
                  Отметить все как прочитанные
                </button>
              </div>
            )}
          </div>

          <a href="/logout" className="logout-btn">Выйти</a>

        </div>
      </div>
    </header>
  );
}