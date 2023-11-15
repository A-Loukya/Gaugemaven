import "../css/Maincategories.css";
import logo from "../Images/logo.svg";
import bg from "../Images/BackGround.svg";
import Smartphone from "../Images/Smartphone.svg";
import profile from "../Images/profile-img.png";
import { Link } from "react-router-dom";
const MainCategories = () => {
  return (
    <div>
      <img src={bg} width="100%" className="bg-image" />
      <div className="Mcategories main">
        <nav>
          <img src={logo} />
          <input
            type="text"
            placeholder="Search for any product"
            className="product-search"
          />

          <div className="profile">
            <img src={profile} />
            <p>Jennifer Lawrence</p>
          </div>
        </nav>
        <div className="redirect">
          <p>Categories</p>
        </div>
        <h3>What are you looking for?</h3>

        {/* <h4>Explore companies by category</h4> */}
        <div className="c-boxes">
          {products.map((product) => (
            <Link
              key={product.id}
              to={{
                pathname: `/product/${product.category}`,
                state: { productN: product.category },
              }}
            >
              <div className="c-details">
                <img src={product.image} />
                <h5>{product.category}</h5>
                <hr />
                <p>{product.product1}</p>
                <p>{product.product2}</p>
                <p>{product.product3}</p>
                <p>{product.product4}</p>
                <p>{product.product5}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    image: Smartphone,
    category: "Smartphones",
    product1: "Apple iphone13",
    product2: "Apple iphone13",
    product3: "Apple iphone13",
    product4: "Apple iphone13",
    product5: "Apple iphone13",
  },
  {
    id: 2,
    image: Smartphone,
    category: "Groceries",
    product1: "Apple iphone13",
    product2: "Apple iphone13",
    product3: "Apple iphone13",
    product4: "Apple iphone13",
    product5: "Apple iphone13",
  },
  {
    id: 3,
    image: Smartphone,
    category: "Fragrances",
    product1: "Apple iphone13",
    product2: "Apple iphone13",
    product3: "Apple iphone13",
    product4: "Apple iphone13",
    product5: "Apple iphone13",
  },
  {
    id: 4,
    image: Smartphone,
    category: "laptops",
    product1: "Apple iphone13",
    product2: "Apple iphone13",
    product3: "Apple iphone13",
    product4: "Apple iphone13",
    product5: "Apple iphone13",
  },
];
export default MainCategories;
