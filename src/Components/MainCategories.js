import {React, useState} from "react";
import { Link } from "react-router-dom";
import products from "./Categories.json";
import "../css/Maincategories.css";
import bg from "../Images/BackGround.svg";
import logo from "../Images/logo.svg";
import search from "../Images/searchicon.svg"
import profile from "../Images/profile-img.png";
import Smartphone from "../Images/Smartphone.svg";
import automotives from "../Images/automotives.svg"
import bags from "../Images/bags.svg"
import fragrances from "../Images/fragrances.svg"
import furniture from "../Images/furniture.svg"
import groceries from "../Images/groceries.svg"
import homedecor from "../Images/homedecor.svg"
import jewellery from "../Images/jewellery.svg"
import laptop from "../Images/laptops.svg"
import light from "../Images/light.svg"
import sunglasses from "../Images/sunglasses.svg"
import watches from "../Images/watches.svg"

const MainCategories = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const productImages = [
    {
      id: 1,
      images: [automotives],
    },
    {
      id: 2,
      images: [fragrances],
    },
    {
      id: 3,
      images: [furniture],
    },
    {
      id: 4,
      images: [groceries],
    },
    {
      id: 5,
      images: [homedecor],
    },
    {
      id: 6,
      images: [light],
    },
    {
      id: 7,
      images: [laptop],
    },
    {
      id: 8,
      images: [Smartphone],
    },
    {
      id: 9,
      images: [sunglasses],
    },
    {
      id: 10,
      images: [watches],
    },
    {
      id: 11,
      images: [bags],
    },
    {
      id: 12,
      images: [jewellery],
    },
  ];

  return (
    <div>
      <img src={bg} width="100%" className="bg-image" />
      <div className="Mcategories main">
        <nav>
          <img src={logo} alt="Logo" />
          
          <input
            type="text"
            placeholder="Search for any product"
            className="product-search"
          />

<div className="profile" onClick={toggleDropdown}>
              <img src={profile} alt="Profile" />
              <p>jennifer laurance</p>
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
        <div className="redirect">
        <Link to="/Mcategories">
          <p>Categories</p>
          <hr></hr>
        </Link>
        </div>
        <h3>What are you looking for?</h3>

        <div className="c-boxes">
          {products.map((product, index) => (
            <Link
              key={product.id}
              to={{
                pathname: `/product/${product.category}`,
                state: { productN: product.category },
              }}
            >
              <div className="c-details" key={product.id}>
                {Array.isArray(productImages[index]?.images) ? (
                  productImages[index].images.map((imageUrl, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={imageUrl}
                      alt={`Product ${imageIndex + 1}`}
                    />
                  ))
                ) : (
                  <p>No images available for this product.</p>
                )}
                <h5>{product.category}</h5>
                <hr />
                <p>{product.product1}</p>
                <p>{product.product2}</p>
                <p>{product.product3}</p>
                <p>{product.product4}</p>
                <p>{product.product5}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
