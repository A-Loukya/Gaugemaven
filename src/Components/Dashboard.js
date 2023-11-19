import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Home.css";
import bg from "../Images/BackGround.svg";
import homeImg from "../Images/home-images.svg";
import shape1 from "../Images/Shape1.svg";
import shape2 from "../Images/Shape 2.svg";
import shape3 from "../Images/Shape 3.svg";
import Categories from "./Categories";
import Features from "./Features";
import Faq from "./Faq";
import logo from "../Images/logo.svg";
import profile from "../Images/profile-img.png";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Dashboard = () => {
  const location = useLocation();
  const { state } = location;
  const name = state && state.name;
console.log('Name in Dashboard:', name);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <div>
      <img src={bg} className="bg-image" />
      <div className="main">
        {/* navbar */}
        <nav>
          
            <img src={logo} className="logo" />
            <ul >
              <a href="#categories">
                <li>Categories</li>
              </a>
              <a href="#features">
                <li>Features</li>
              </a>
              <Link to="/about">
              <li>About</li>
              </Link>
            </ul>
            <div className="profile" onClick={toggleDropdown}>
              <img src={profile} alt="Profile" />
              <p>{name}</p>
            </div>
          <div
            className={`profile-dropdown ${isDropdownVisible ? "show" : ""}`}
          >
            <Link to="/profile">
              <li>Edit profile</li>
            </Link>
            <Link to="/myreviews">
              <li>My reviews</li>
            </Link>
            <li className="logout">Log out</li>
          </div>
        </nav>
        {/* home section */}
        <section>
          <div className="home">
            <div className="home-left">
              <h1>Find products you can trust.</h1>
              <p>
                <span>Gaugemaven</span> is a revolutionary platform built to
                help you find trusted products by reading and writing reviews.
              </p>
              <form className="search-form">
                <input
                  type="text"
                  placeholder="Search for any product..."
                  className="search-box"
                />

                <button className="search-btn">Search</button>
              </form>
            </div>
            <div className="home-right">
              <img src={homeImg} alt="Home" />
            </div>

            <img src={shape1} className="shape1" alt="Shape 1" />
            <img src={shape2} className="shape2" alt="Shape 2" />
            <img src={shape3} className="shape3" alt="Shape 3" />
          </div>
        </section>
      </div>
      <Categories click="Mcategories" />
      <Features />
      <Faq />
      <Footer/>
    </div>
  );
};

export default Dashboard;
