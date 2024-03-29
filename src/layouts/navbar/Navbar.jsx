import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo" className="platform_logo" />
          <span>Akiro Estate</span>
        </a>

        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Terms</a>
      </div>
      <div className="navbar_right">
        <a href="/" className="btn_login">Sign In</a>
        <a href="/" className="btn_register">Sign Up</a>
      </div>
    </nav>
  )
}

export default Navbar;