import React, { useState } from 'react';
import bg from "../Images/BackGround.svg"
import logo from "../Images/logo.svg"
import "../css/WriteReview.css";
import { Link, useParams } from "react-router-dom";
import productsData from "./productsData.json";
import GiveRating from "./GiveRating";
const WriteReview = () => {
  const { productN,productName } = useParams();
  const [review, setReview] = useState(0);
//   star rating review count
  console.log(review);

  const handleChange = (newReview) => {
    setReview(newReview);
  };

  const ProductName = productName.toLowerCase();
  const matchingProduct = productsData.filter(
    (product) => product.name.toLowerCase() === ProductName
  );

  if (matchingProduct.length === 0) {
    return <p>No such products found for this category</p>;
  }


    return ( 
        <div>
 <img src={bg} width="100%" className="bg-image" />
      <div className="main writeReview">
        <nav>
            <img src={logo}/>
        </nav>
            {/* redirect */}
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
          <p> {">"}</p>
          <Link to={`/product/${productN}/${productName}`}>
          <p>{productName}</p>
          <hr></hr>
          </Link>
          <p> {">"}</p>
          <Link to={`/product/${productN}/${productName}/review`}>
          <p>Review</p>
          <hr></hr>
          </Link>
        </div>

        <div >
            {matchingProduct.map((product)=>(
                <div key={product._id} className="review-box">
                    <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={product.images[0]} className="product-img" />
                    <div>
                    <h2> {product.name}</h2>
                   <GiveRating onReviewChange={handleChange} />
                   </div>


                </div>
                   <h4>Tell us about your experience</h4>
                   <form>
                   <textarea
        placeholder="What made your experience great? Remember to be polite and humble."
      />
       <h4>Give title to your review.</h4>
       <input type='text' placeholder='Keep it short.'/>
       <button className="Review-button ">Review it</button>
                   </form>
                </div>
            ))}
        </div>
      </div>
        </div>
     );
}
 
export default WriteReview;