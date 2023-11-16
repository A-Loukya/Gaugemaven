// StarRating.js
import React, { useState } from 'react';
import filledStar from '../Images/FilledStar.svg';
import emptyStar from '../Images/BlankStar.svg';

const GiveRating = ({ onReviewChange }) => {
  const [review, setReview] = useState(0);

  const handleStarClick = (clickedStar) => {
    setReview(clickedStar);
    onReviewChange(clickedStar);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starType = i <= review ? filledStar : emptyStar;

      stars.push(
        <img
          key={i}
          src={starType}
          alt={`${starType} star`}
          onClick={() => handleStarClick(i)}
          style={{ cursor: 'pointer', width: '50px', height: '50px' ,marginRight:'15px'}} 
        />
      );
    }

    return stars;
  };

  return (
    <div>
      {renderStars()}
    </div>
  );
};

export default GiveRating;
