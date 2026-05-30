import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../../styles/layout.css";

export default function Layout() {
  return (
    <>
      <Header />

      <div className="page">
        <div className="container">
          <Sidebar />
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}