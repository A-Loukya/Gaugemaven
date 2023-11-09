// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Login from "./Components/Login";
function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home onLoginClick={handleLoginClick} showLogin={showLogin} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
