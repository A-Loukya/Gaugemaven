import "../css/MyReviews.css";
import bg from "../Images/BackGround.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../Images/logo.svg";
import location from "../Images/location.svg";
import profile from "../Images/profile-img.png";
import data from "./MyReviews.json";
import profileImg from "../Images/profile-img.png";
import StarRating from "./StarRating";
import search from "../Images/searchicon.svg"
import Footer from "./Footer";
const MyReviews = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const name = "Jennifer laurance";
  const userName = name.toLowerCase();
  const matchingUser = data.filter(
    (user) => user.name.toLowerCase() === userName
  );

  if (matchingUser.length === 0) {
    return <p>No such products found for this category</p>;
  }
  console.log(matchingUser);
  const productNamesArray = data.map((item) => item.product_name);

  console.log(productNamesArray);

  return (
    <div>
      <img src={bg} width="100%" className="bg-image" />
      <div className="main MyReview">
        {/* nav */}
        <nav>
          <img src={logo} alt="Logo" className="logo"/>
          <div className="product-search">
            <img src={search}/>
          <input
            type="text"
            placeholder="Search for any product"
            
          />
          </div>

          <div className="profile" onClick={toggleDropdown}>
            <img src={profile} alt="Profile" />
            <p>Jennifer laurance</p>
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
        <div className="Myrev-prof">
          <img src={profileImg} />
          <div>
            <h5>Jennifer Lawrence</h5>
            <p>USA</p>
          </div>
        </div>
        <h2>My reviews</h2>
        <div>
          {matchingUser.map((user, index) => (
            <div key={index}>
              {user.product_name.map((productName, i) => (
                <div key={i}>
                  <h4 style={{ marginTop: '80px' }}>You reviewed {user.product_name[i]}</h4>
                  <div className="review-card">
                    <div className="review-profile">
                      <img src={profile} className="reviewProfile-img" />
                      <div>
                        <p>{user.name}</p>
                        <div className="reviewc-loctaion">
                          <img src={location} />
                          <span>{user.country}</span>
                        </div>
                      </div>
                    </div>
                    <hr className="hr1" />
                    <StarRating averageRating={user.rating[i]} />
                    <h4 className="review-title">{user.revietitle[i]}</h4>
                    <p className="review-text">{user.reviewtext[i]}</p>
                    <p className="review-date">
                      Date of experience:{" "}
                      <span>
                        {new Date(user.reviewdate[i]).toLocaleString()}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MyReviews;
