// Navbar.js
import "../css/Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

const Navbar = ({ buttonText, buttonImage, buttonClassName ,click,imageSize}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div >
      <nav>
        <div className={`navbar ${menuOpen ? "active" : ""}`}>
          <img src={logo} className="logo" />
          <ul>
            <a href="#categories">
            <li>Categories</li>
            </a>
            <a href="#features">
            <li>Features</li>
            </a>
            <li>About</li>
          </ul>
          <Link to={`/${click}`}>
          <button
            className={`register-btn ${buttonClassName}`}
            
          >
            {buttonText}
            {buttonImage && <img src={buttonImage} alt="Arrow"  style={{ width: imageSize, height: 'auto' }} />}
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
      </nav>
    </div>
  );
};

export default Navbar;
