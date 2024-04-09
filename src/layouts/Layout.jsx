import React from "react";
import "./layout.scss";
import Navbar from "./navbar/Navbar";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navigation__bar">
        <Navbar />
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;