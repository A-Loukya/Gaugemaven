import "../css/ProductReview.css";
import bg from "../Images/BackGround.svg";
import { Link, useParams } from "react-router-dom";
import logo from "../Images/logo.svg";
import profile from "../Images/profile-img.png";
import arrowout from "../Images/arrowout.svg";
import productsData from "./productsData.json";
import StarRating from "./StarRating";
import RatingBars from "./RatingBars";
import ReviewCard from "./ReviewCard";
const ProductReview = () => {
  const { productN, productR } = useParams();
  const ProductName = productR.toLowerCase();
  const matchingProduct = productsData.filter(
    (product) => product.name.toLowerCase() === ProductName
  );

  if (matchingProduct.length === 0) {
    return <p>No such products found for this category</p>;
  }

  return (
    <div>
      <img src={bg} width="100%" className="bg-image" />
      <div className="main productReview">
        {/* nav */}
        <nav>
          <img src={logo} alt="Logo" />
          <input
            type="text"
            placeholder="Search for any product"
            className="product-search"
          />

          <div className="profile">
            <img src={profile} alt="Profile" />
            <p>Jennifer Lawrence</p>
          </div>
        </nav>
        {/* redirect to back */}
        <div className="redirect">
          <Link to="/Mcategories">
            <p>Categories</p>
          </Link>
          <p> {">"}</p>
          <Link to={`/product/${productN}`}>
            <p>{productN}</p>
          </Link>
          <p> {">"}</p>
          <p>{productR}</p>
        </div>

        {/* product details */}
        {matchingProduct.map((product) => (
          <div key={product._id} className="product-details">
            <div className="Main-pdetails">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Link
                  key={product._id}
                  to={{
                    pathname: `/product/${productN}/${product.name}/images`,
                    state: {
                      productN: productN,
                      productName: product.name,
                    },
                  }}
                >
                  <img src={product.images[0]} className="product-img" />
                </Link>

                <div className="product-info">
                  <h2> {product.name}</h2>
                  <h4>
                    Reviews {product.count} |{" "}
                    {getRatingLabel(calculateAverageRating(product.review))}
                  </h4>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <StarRating
                      averageRating={calculateAverageRating(product.review)}
                    />
                    <h5> {calculateAverageRating(product.review)}</h5>
                  </div>
                </div>
              </div>
              <div className="product-link">
                <img src={arrowout} />
                <a href={product.link} target="_blank">
                  Visit the official website
                </a>
              </div>
            </div>
            <div></div>
          </div>
        ))}

        {/* review btn */}
        <div className="write-rev">
          <div className="profile">
            <img src={profile} alt="Profile" />
            <p>Jennifer Lawrence</p>
          </div>
          <button>Review it</button>
        </div>

        {/* rating bars */}
        {matchingProduct.map((product) => (
          <RatingBars ratings={product.review} count={product.count} />
        ))}

        {/* review cards */}
        <ReviewCard reviews={matchingProduct} />
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

export default ProductReview;
{
  /* <img
              src={product.images[0]}
              alt="Product"
              className="product-Img"
            />
            <div>
              <h4> {product.name}</h4>
              <p>Reviews {product.count} | </p>
              <div style={{ display: "flex", alignItems: "center" }}></div>
            </div> */
}