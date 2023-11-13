import "../css/Maincategories.css";
import logo from "../Images/logo.svg";
import bg from "../Images/BackGround.svg";
import Smartphone from "../Images/Smartphone.svg";
const MainCategories = () => {
    return ( 
        <div>
            <img src={bg} width="100%" className="bg-image" />
            <div className="Mcategories main">
                <nav>
                    <img src={logo}/>
                    <div className="profile">
                        <img src="" />
                        <p>Jennifer Lawrence</p>

                    </div>
                </nav>
                <h3>What are you looking for?</h3>
                <form className="search-form">
                <input type="text" placeholder="Search for any product..." className="search-box" />
                {/* <button className="search-btn">Search</button> */}
              </form>
              <h4>Explore companies by category</h4>
              <div className="c-boxes">
              <div className="c-details">
                <img src={Smartphone}/>
                <h5>Smartphones</h5>
                <hr></hr>
                <p>Apple iphone13</p>
                <p>Apple iphone13</p>
                <p>Apple iphone13</p>
                <p>Apple iphone13</p>
                <p>Apple iphone13</p>
              </div>
            
              
              </div>
            </div>
        </div>
     );
}
 
export default MainCategories;