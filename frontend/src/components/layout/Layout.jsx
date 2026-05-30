import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../../styles/layout.css";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Header />

      <div className="page">
        <div className="container">

          <Sidebar
            open={sidebarOpen}
            setOpen={setSidebarOpen}
          />

          <main className="main-content">
            <Outlet />
          </main>

        </div>
      </div>
    </>
  );
}