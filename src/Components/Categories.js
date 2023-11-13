import "../css/Categories.css";
import shoes from "../Images/shoes.svg";
import beauty from "../Images/beauty.svg";
import books from "../Images/books.svg";
import electronics from "../Images/electronics.svg";
import kitchen from "../Images/kitchen.svg";
import luggage from "../Images/luggage.svg";
import sports from "../Images/sports.svg";
import toys from "../Images/toys.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Categories = ({click}) => {
    // const [navigate,setNavigate]=useState('');
    // navigate={onclick}
    // if(navigate==)
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
      <div className="carousel1" style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}>
        {/* carousel mapping for data-1 */}
        {data1.map((d, index) => (
                <Link to= {`/${click}`}>
          <div className="card" key={index}>
            <img src={d.image} alt={d.title} />
            <h4>{d.title}</h4>
          </div>
          </Link>
        ))}
      </div>
      {/* carousel-2 */}
      <div className="carousel2" style={{ transform: `translateX(-${currentSlide * cardWidth}px)` }}>
        {/* carousel mapping for data 2 */}
        {data2.map((d, index) => (
             <Link to= {`/${click}`}>
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
}
// data1
const data1=[
    {
        id:1,
        image:shoes,
        title:"Shoes"
    },
    {
        id:2,
        image:electronics,
        title:"Electronics"
    },
    {
        id:3,
        image:books,
        title:"Books"
    },
    {
        id:4,
        image:sports,
        title:"Sports"
    },
    
    {
        id:5,
        image:electronics,
        title:"Electronics"
    },
    {
        id:6,
        image:books,
        title:"Books"
    },
    {
        id:7,
        image:sports,
        title:"Sports"
    },
    
    {
        id:8,
        image:electronics,
        title:"Electronics"
    },
    {
        id:9,
        image:books,
        title:"Books"
    },
    {
        id:10,
        image:sports,
        title:"Sports"
    },
    
   
]
// data2
const data2=[
    {
        id:1,
        image:luggage,
        title:"Luggage"
    },
    {
        id:2,
        image:toys,
        title:"Toys"
    },
    {
        id:3,
        image:kitchen,
        title:"Home & Kitchen"
    },
    {
        id:4,
        image:beauty,
        title:"Beauty"
    },
   
    {
        id:5,
        image:toys,
        title:"Toys"
    },
    {
        id:6,
        image:kitchen,
        title:"Home & Kitchen"
    },
    {
        id:7,
        image:beauty,
        title:"Beauty"
    },
   
    {
        id:8,
        image:toys,
        title:"Toys"
    },
    {
        id:9,
        image:kitchen,
        title:"Home & Kitchen"
    },
    {
        id:10,
        image:beauty,
        title:"Beauty"
    },
   
   
]

export default Categories;