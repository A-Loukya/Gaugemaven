// Navbar.js
import "../css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

const Navbar = ({ buttonText, buttonImage, buttonClassName ,click}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
      <navbar>
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <img src={logo} className="logo" />
          <ul>
            <li>Categories</li>
            <li>Features</li>
            <li>About</li>
          </ul>
          <Link to={`/${click}`}>
          <button
            className={`register-btn ${buttonClassName}`}
            
          >
            {buttonText}
            {buttonImage && <img src={buttonImage} alt="Arrow" />}
          </button>
            </Link>
        </div>
        <div
          className={`hamburger-menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </navbar>
    </div>
  );
};

export default Navbar;
