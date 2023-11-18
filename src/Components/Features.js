import "../css/Features.css";
import img1 from "../Images/featuresImg1.svg";
import img2 from "../Images/featuresImg2.svg";
import bglines from "../Images/BackGroundlines.svg";
import rightarrow from "../Images/rightarrow.svg";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <div>
      <div className="main features" id="features">
        <h2>
          Outstanding assistance,<span>ready to assist you.</span>{" "}
        </h2>
        <h6>
          Join our community of pro reviewers to assist others and shop smarter
        </h6>
        <div className="feature-1">
          <div>
            <h1>Shop smarter with Gaugemaven</h1>
            <p>
              Keep Gaugemaven in your pocket. Find products, read reviews, or
              write them—all while on the go.
            </p>
          </div>
          <img src={img1} />
        </div>
        <div className="feature-2">
          <img src={img2} />
          <div>
            <h1>Expand the reach of your voice on a global scale.</h1>
            <p>
              Gaugemaven is a review platform that’s open to everyone. Share
              your experiences to help others make better choices and encourage
              companies to up their game.
            </p>
            <Link to="/about">
            <button className="feature-btn">
            <div className="btn-circle1"></div>
            <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
              <span>About us</span>
              <img src={rightarrow} />
              </div>
              <div className="btn-circle2"></div>
            </button>
            </Link>
          </div>
        </div>
      </div>
      <img src={bglines} width="100%" className="bglines" />
    </div>
  );
};

export default Features;
