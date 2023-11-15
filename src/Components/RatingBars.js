import React from "react";
import "../css/RatingBars.css";
const RatingBars = ({ ratings, count }) => {
  // Calculate the average rating for each number
  const ratingCounts = {};
  ratings.forEach((rating) => {
    ratingCounts[rating] = (ratingCounts[rating] || 0) + 1;
  });

  // Convert counts to percentages
  const totalRatings = ratings.length;
  const averageRatings = {};
  for (let key in ratingCounts) {
    averageRatings[key] = (ratingCounts[key] / totalRatings) * 100;
  }

  return (
    <div className="ratings">
      <h3>Reviews</h3>
      <h4>{count} total reviews</h4>
      {[5, 4, 3, 2, 1].map((rating) => (
        <div key={rating} className="rating-flex">
          <span className="rating-number">{rating} star</span>
          <div className="bar">
            <div
              style={{
                width: `${averageRatings[rating] || 0}%`,
              }}
              className="rating-bar"
            ></div>
          </div>
          <span className="rating-count">{ratingCounts[rating] || 0}</span>
        </div>
      ))}
    </div>
  );
};
export default RatingBars;
