import { useState } from "react";
import "../css/Home.css";
import bg from "../Images/BackGround.svg";
import logo from "../Images/logo.svg";
import arrowRight from "../Images/Arrow-Right.svg";
import homeImg from "../Images/home-images.svg";
import shape1 from "../Images/Shape1.svg";
import shape2 from "../Images/Shape 2.svg";
import shape3 from "../Images/Shape 3.svg";
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <img src={bg} className="bg-image" />
      <div className="main">
        {/* navbar */}
        <navbar>
          <div className={`navbar ${menuOpen ? "active" : ""}`}>
            <img src={logo} className="logo" />
            <ul>
              <li>Categories</li>
              <li>Features</li>
              <li>About</li>
            </ul>
            <button className="register-btn">
              Register Now
              <img src={arrowRight} />
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
        {/* home section */}
        <section>
            <div className="home">
                <div className="home-left">
                    <h1>Find products you can trust.</h1>
                    <p><span>Gaugemaven</span> is a revolutionary platform built to help you find trusted products by reading and writing reviews.</p>
                    <form className="search-form">
                        <input type="text" placeholder="Search for any product..." className="search-box"/>
                        <button className="search-btn">Search</button>
                    </form>

                </div>
                <div className="home-right">
                    <img src={homeImg}/>
                </div>

                    <img src={shape1} className="shape1"/>
                    <img src={shape2} className="shape2"/>
                    <img src={shape3} className="shape3"/>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
