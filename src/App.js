// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Features from "./Components/Features";
import Faq from "./Components/Faq";
function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/features" element={<Features />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
