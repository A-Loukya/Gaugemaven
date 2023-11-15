import React, { useState } from "react";
import "../css/ImageCarousel.css";
import { useParams } from "react-router-dom";
import productsData from "./productsData.json";
import bg from "../Images/BackGround.svg";
import { Link } from "react-router-dom";

const ImageCarousel = () => {
  const { productN, productName } = useParams();
  //   for finding matching products
  const matchingProduct = productsData.find(
    (product) =>
      product.name.toLowerCase() ===
      (productName ? productName.toLowerCase() : "")
  );
  // for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % matchingProduct.images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? matchingProduct.images.length - 1 : prevIndex - 1
    );
  };

  if (!matchingProduct) {
    return <p>No such product found</p>;
  }

  return (
    <div>
      <img src={bg} width="100%" className="bg-image" />
      <div className="main icarousel">
        {/* redirect */}
        <div className="redirect">
          <Link to="/Mcategories">
            <p>Categories</p>
          </Link>
          <p> {">"}</p>
          <Link to={`/product/${productN}`}>
            <p>{productN}</p>
          </Link>
          <p> {">"}</p>
          <Link to={`/product/${productN}/${productName}`}>
            <p>{productName}</p>
          </Link>
          <p> {">"}</p>
          <p>Images</p>
        </div>
        {/* carousel */}
        <div className="carousel-container">
          <div className="arrow left-arrow" onClick={prevImage}>
            {"<"}
          </div>
          <div className="carousel-images">
            <img
              src={matchingProduct.images[currentIndex]}
              alt={`Product ${currentIndex}`}
              className="c-image"
            />
          </div>
          <div className="arrow right-arrow" onClick={nextImage}>
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
