// Home.js
import React from "react";
import Navbar from "./Navbar";
import "../css/Home.css";
import bg from "../Images/BackGround.svg";
import arrowRight from "../Images/Arrow-Right.svg";
import homeImg from "../Images/home-images.svg";
import shape1 from "../Images/Shape1.svg";
import shape2 from "../Images/Shape 2.svg";
import shape3 from "../Images/Shape 3.svg";
import Categories from "./Categories";
import Features from "./Features";
import Faq from "./Faq";
import { Link } from "react-router-dom";
// import Profile from "./Profile";
// import MainCategories from "./MainCategories";

const Home = () => {
  return (
    <div>
      <img src={bg} className="bg-image" />
      <div className="main">
        {/* navbar */}
        <Navbar buttonText="Log in" buttonImage={arrowRight} click="login" buttonClassName="register-btn"/>

        {/* home section */}
        <section>
          <div className="home">
            <div className="home-left">
              <h1>Find products you can trust.</h1>
              <p>
                <span>Gaugemaven</span> is a revolutionary platform built to help you find trusted products by reading
                and writing reviews.
              </p>
              <form className="search-form">
                <Link to="/login">
                <input type="text" placeholder="Search for any product..." className="search-box" />
                </Link>
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
      <Categories click="login"/>
      <Features/>
      <Faq/>


      {/* <Profile/> */}
      {/* <MainCategories/> */}
    </div>
  );
};

export default Home;
