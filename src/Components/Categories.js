import "../css/Categories.css";
import { useState } from "react";
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
import { Link } from "react-router-dom";
const Categories = ({ click }) => {
  // carousel logic

  const [currentSlide, setCurrentSlide] = useState(0);
  const cardWidth = 260;

  const handlePrev = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  };

  const handleNext = () => {
    const maxSlides = 4;
    setCurrentSlide(Math.min(currentSlide + 1, data1.length - maxSlides));
  };

  return (
    <div className="categories main" id="categories">
      <h2>Explore Categories</h2>
      {/* carousel buttons */}
      <div className="carousel-btns">
        <button className="carousel-button left" onClick={handlePrev}>
          &lt;
        </button>
        <button className="carousel-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>
      {/* carousel */}
      <div className="carousel">
        {/* carousel-1 */}
        <div
          className="carousel1"
          style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}
        >
          {/* carousel mapping for data-1 */}
          {data1.map((d, index) => (
            <Link to={`/${click}`}>
              <div className="card" key={index}>
                <img src={d.image} alt={d.title} />
                <h4>{d.title}</h4>
              </div>
            </Link>
          ))}
        </div>
        {/* carousel-2 */}
        <div
          className="carousel2"
          style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}
        >
          {/* carousel mapping for data 2 */}
          {data2.map((d, index) => (
            <Link to={`/${click}`}>
              <div className="card" key={index}>
                <img src={d.image} alt={d.title} />
                <h4>{d.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
// data1
const data1 = [
  {
    id: 1,
    image: automotives,
    title: "Automotives",
  },
  {
    id: 2,
    image: fragrances,
    title: "Fragrances",
  },
  {
    id: 3,
    image: furniture,
    title: "Furniture",
  },
  {
    id: 4,
    image: groceries,
    title: "Groceries",
  },

  {
    id: 5,
    image: homedecor,
    title: "Homedecor",
  },
  {
    id: 6,
    image: light,
    title: "lighting",
  },
];
// data2
const data2 = [
  {
    id: 1,
    image: laptop,
    title: "Laptops",
  },
  {
    id: 2,
    image: Smartphone,
    title: "Smartphone",
  },
  {
    id: 3,
    image: sunglasses,
    title: "Sun glasses",
  },
  {
    id: 4,
    image: watches,
    title: "MensWatches",
  },

  {
    id: 5,
    image: bags,
    title: "WomensBags",
  },
  {
    id: 6,
    image: jewellery,
    title: "Womenjwellery",
  },

];

export default Categories;
