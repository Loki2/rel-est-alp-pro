import { useState } from "react";
import "./navbar.scss";


import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar_left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" className="platform_logo" />
          <span>Akiro Estate</span>
        </a>

        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agent">Agents</a>
        <a href="/term">Terms</a>
      </div>
      <div className="navbar_right">
        <a href="/login" className="btn_login">Sign In</a>
        <a href="/register" className="btn_register">Sign Up</a>

        <div className="menu__bar">
          <CiMenuBurger className="menu__icon" onClick={() => setMenu((prev) => !prev)} />
        </div>

        <div className={menu ? "menu__list active" : "menu__list"}>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agent">Agents</a>
          <a href="/term">Terms</a>

          <a href="/login">Register</a>
          <a href="/register">Login</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;