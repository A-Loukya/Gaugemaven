import React from "react";
import { useState } from "react";
import bg from "../Images/BackGround.svg";
import logo from "../Images/logo.svg";
import profile from "../Images/profile-img.png";
import { useParams, Link } from "react-router-dom";
import "../css/Product.css";
import productsData from "./productsData.json";
import StarRating from "./StarRating";

const Product = () => {
  const { productN } = useParams();
  const categoryName = productN.toLowerCase();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Find all products with matching category
  const matchingProducts = productsData.filter(
    (product) => product.category.toLowerCase() === categoryName
  );
  if (matchingProducts.length === 0) {
    return <p>No products found for this category</p>;
  }

  return (
    <div>
      <div>
        <img src={bg} width="100%" className="bg-image" />
        <div className="main product">
          {/* nav */}
          <nav>
            <img src={logo} alt="Logo" />
            <input
              type="text"
              placeholder="Search for any product"
              className="product-search"
            />

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
          {/* redirect to back */}
          <div className="redirect">
            <Link to="/Mcategories">
              <p>Categories</p>
              <hr></hr>
            </Link>
            <p> {">"}</p>
            <Link to={`/product/${productN}`}>
              <p>{productN}</p>
              <hr></hr>
            </Link>
          </div>

          {/* product details */}
          {matchingProducts.map((product) => (
            // link for productreview
            <Link
              key={product._id}
              to={{
                pathname: `/product/${productN}/${product.name}`,
                state: {
                  productN: product.category,
                  productR: product.name,
                },
              }}
            >
              <div key={product._id} className="category-details">
                <img
                  src={product.images[0]}
                  alt="Product"
                  className="productImg"
                />
                <div>
                  <h4> {product.name}</h4>
                  <p>
                    Reviews {product.count} |{" "}
                    {getRatingLabel(calculateAverageRating(product.review))}
                  </p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StarRating
                      averageRating={calculateAverageRating(product.review)}
                    />
                    <h4> {calculateAverageRating(product.review)}</h4>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// for finding averagerating
const calculateAverageRating = (ratings) => {
  const totalRatings = ratings.length;
  const sumRatings = ratings.reduce(
    (total, rating) => total + parseInt(rating),
    0
  );
  const averageRating = sumRatings / totalRatings;
  return isNaN(averageRating) ? 0 : averageRating.toFixed(2);
};

// for finding rating label
const getRatingLabel = (averageRating) => {
  if (averageRating >= 1 && averageRating < 2) {
    return "Poor";
  } else if (averageRating >= 2 && averageRating < 3) {
    return "Fair";
  } else if (averageRating >= 3 && averageRating < 4) {
    return "Good";
  } else if (averageRating >= 4 && averageRating < 5) {
    return "Better";
  } else if (averageRating === 5) {
    return "Excellent";
  } else {
    return "Not Rated";
  }
};

export default Product;
