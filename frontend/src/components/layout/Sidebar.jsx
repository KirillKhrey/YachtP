import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";

import HouseIcon from "../../assets/icons/house.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import MegaphoneIcon from "../../assets/icons/megaphone.svg";
import LifeBuoyIcon from "../../assets/icons/life-buoy.svg";
import ImageIcon from "../../assets/icons/image.svg";
import ProfileIcon from "../../assets/icons/user.svg";
import SettingsIcon from "../../assets/icons/settings.svg";

export default function Sidebar({ open, setOpen }) {
  const role = "user";

  const closeSidebar = () => setOpen(false);

  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>

        <nav className="sidebar-nav">

          <NavLink to="/" className="sidebar-link" onClick={closeSidebar}>
            <img src={HouseIcon} className="sidebar-icon" />
            <span>Главная</span>
          </NavLink>

          <NavLink to="/tasks" className="sidebar-link" onClick={closeSidebar}>
            <img src={CalendarIcon} className="sidebar-icon" />
            <span>Календарь занятий</span>
          </NavLink>

          <NavLink to="/events" className="sidebar-link" onClick={closeSidebar}>
            <img src={MegaphoneIcon} className="sidebar-icon" />
            <span>События</span>
          </NavLink>

          <NavLink to="/contacts" className="sidebar-link" onClick={closeSidebar}>
            <img src={LifeBuoyIcon} className="sidebar-icon" />
            <span>Контакты</span>
          </NavLink>

          <NavLink to="/gallery" className="sidebar-link" onClick={closeSidebar}>
            <img src={ImageIcon} className="sidebar-icon" />
            <span>Фотоальбом</span>
          </NavLink>

          <NavLink to="/profile" className="sidebar-link" onClick={closeSidebar}>
            <img src={ProfileIcon} className="sidebar-icon" />
            <span>Личный кабинет</span>
          </NavLink>

          {(role === "admin" || role === "moderator") && (
            <NavLink to="/admin" className="sidebar-link" onClick={closeSidebar}>
              <img src={SettingsIcon} className="sidebar-icon" />
              <span>Админ панель</span>
            </NavLink>
          )}

        </nav>
      </aside>

      {/* MOBILE BUTTON */}
      <button
        className="mobile-sidebar-btn"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}