import "../css/Profile.css";
import React, { useState } from "react";
import bg from "../Images/BackGround.svg";
import Navbar from "../Components/Navbar";
import profileImg from "../Images/profile-img.png";
import logo from "../Images/logo.svg";
import rightarrow from "../Images/rightarrow.svg";
import profile from "../Images/profile-img.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Profile = () => {
  const name = "Jennifer laurence";
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleFileChange = (e) => {
    // Handle the file change event here, if needed
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };
  return (
    <div>
      <img src={bg} width="100%" className="bg-image" />
      <div className="main">
      <nav>
          
          <img src={logo} className="logo" />
          
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
          <li>Log out</li>
        </div>
      </nav>
        <div className="profile-box">
          <div className="profile-details">
            <img src={profileImg} />
            <div>
              <h5>Jennifer Lawrence</h5>
              <p>USA</p>
            </div>
          </div>
          <h4>Personal details</h4>

          <form className="profile-form">
            {/* profile picture input */}
            <label htmlFor="profilePicture" className="file-input">
              Upload a new profile picture
              <input
                type="file"
                id="profilePicture"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </label>
            <button className="RemovePic-btn">Remove the current profile picture</button>
            <br></br>
            <label className="profile-form-label">Email</label>
            <input type="email" className="profile-form-input" />
            <label className="profile-form-label">name</label>
            <input type="text" className="profile-form-input" />
            <label className="profile-form-label">Country</label>
            <input type="text" className="profile-form-input" />
            <label className="profile-form-label">Language</label>
            <input type="text" className="profile-form-input" />
            <button className="psbmt-btn">
            <div className="btn-circle1"></div><span>Submit<img src={rightarrow} /></span><div className="btn-circle2" ></div>
            </button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
