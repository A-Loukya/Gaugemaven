// Navbar.js
import "../css/Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.svg";

const Navbar = ({ buttonText, buttonImage, buttonClassName }) => {
  const [menuOpen, setMenuOpen] = useState(false);//for responsive nav
  const navigate = useNavigate(); // useNavigate hook for navigation
//for responsive nav
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
// for navigation
  const handleLoginClick = () => {
    navigate("/login");
    setMenuOpen(false);
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
          <button
            className={`register-btn ${buttonClassName}`}
            onClick={handleLoginClick}
          >
            {buttonText}
            {buttonImage && <img src={buttonImage} alt="Arrow" />}
          </button>
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
