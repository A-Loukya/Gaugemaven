import React from "react";
import filledstar from "../Images/FilledStar.svg";
import blankstar from "../Images/BlankStar.svg";
const StarRating = ({ averageRating }) => {
  // Create an array with the number of filled stars
  const filledStars = Array(Math.floor(averageRating)).fill("filled-star");

  // Create an array with the remaining blank stars
  const blankStars = Array(5 - Math.floor(averageRating)).fill("blank-star");

  // Combine the arrays
  const allStars = filledStars.concat(blankStars);

  return (
    <div>
      {allStars.map((star, index) => (
        <img
          key={index}
          src={star === "filled-star" ? filledstar : blankstar}
          alt={star}
          style={{ marginRight: "10px" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
