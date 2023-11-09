// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
