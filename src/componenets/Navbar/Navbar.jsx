import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-mobile">
        <img src="/senshost logo 2.svg" alt="Logo" />
      </div>

      <div className="hamburger" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <div className="logo-desktop">
          <img src="/senshost logo 2.svg" alt="Logo" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="#">Solutions</a>
          </li>
          <li className="nav-item">
            <a href="#">Features</a>
          </li>
          <li className="nav-item">
            <a href="#">FAQ</a>
          </li>
        </ul>

        <ul className="nav-buttons">
          {" "}
          <li className="">
            <button className="login-btn">Login</button>
          </li>
          <li>
            <button className="demo-btn">Schedule a Demo</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
