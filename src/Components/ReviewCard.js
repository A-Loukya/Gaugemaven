// import productsData from "./productsData.json";
import "../css/ReviewCard.css";
import profile from "../Images/profile-img.png";
import location from "../Images/location.svg";
import StarRating from "./StarRating";
import { useState } from "react";
import likeimg from "../Images/like.svg";
import unlikeimg from "../Images/unlike.svg";
const ReviewCard = ({ reviews }) => {
  const reviewUsers = reviews.map((item) => item.ReviewUserName || []).flat();
  const reviewDates = [
    ...new Set(reviews.map((item) => item.ReviewDate || []).flat()),
  ];
  const reviewUserCountries = reviews
    .map((item) => item.ReviewUserCountry || [])
    .flat();
  const review = reviews.map((item) => item.review || []).flat();
  const reviewTitles = reviews.map((item) => item.ReviewTitle || []).flat();
  const reviewTexts = reviews.map((item) => item.ReviewText || []).flat();

  //   for like function
  const [likeStates, setLikeStates] = useState(reviewUsers.map(() => false));
  const toggleLike = (index) => {
    const newLikeStates = [...likeStates];
    newLikeStates[index] = !newLikeStates[index];
    setLikeStates(newLikeStates);
  };

  return (
    <div>
      {reviewUsers.map((user, index) => (
        <div key={index} className="review-card">
          <div className="review-profile">
            <img src={profile} className="reviewProfile-img" />
            <div>
              <p>{user}</p>
              <div className="reviewc-loctaion">
                <img src={location} />
                <span>{reviewUserCountries[index]}</span>
              </div>
            </div>
          </div>
          <hr className="hr1" />
          <StarRating averageRating={review[index]} />
          <h4 className="review-title">{reviewTitles[index]}</h4>
          <p className="review-text">{reviewTexts[index]}</p>
          <p className="review-date">
            Date of experience:{" "}
            <span>{new Date(reviewDates[index]).toLocaleString()}</span>
          </p>
          <hr className="hr1" />
          <div className="like">
            <button onClick={() => toggleLike(index)} className="like-btn">
              <img
                src={likeStates[index] ? likeimg : unlikeimg}
                alt={likeStates[index] ? "like" : "unlike"}
              />
            </button>
            <span>Helpful</span>
          </div>
        </div>
      ))}
    </div>
  );
};

{
  /* <p>User: {user}</p>
          <p>Date: {new Date(reviewDates[index]).toLocaleString()}</p>
          <p>Country: {reviewUserCountries[index]}</p>
          <p>Title: {reviewTitles[index]}</p>
          <p>Score: {reviewScores[index]}</p> */
}
export default ReviewCard;
