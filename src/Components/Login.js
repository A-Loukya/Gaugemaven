import Navbar from "../Components/Navbar"
import "../css/Login.css";
import bg from "../Images/BackGround.svg";
import rightarrow from "../Images/rightarrow.svg";
import bglines from "../Images/BackGroundlines.svg";
import bgdots from "../Images/BackGroundDots.svg";
import image from "../Images/signupImage.svg";
import { useState } from "react";
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const details = { email, password };
    
        console.log(details);
      }

    return ( 
        <div className="login-body">
<img src={bg} width="100%" className="bg-image"/>
        <div className="main login">
            {/* navbar */}
            <Navbar buttonClassName="custom-btn-class"/>
<h1>Read reviews. Write reviews.<br></br> Find products.</h1>
{/* login */}
<div className="login-box">
  {/* login-left */}
<div className="login-left">
<h4>Log in</h4>
<form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
            className="email"
            placeholder='your@gmail.com'
              type="text" 
              required 
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <label>Password</label>
            <input 
            className="password"
            placeholder='combination of letter, symbols and numericals'
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>Don’t have an account? <span>Sign up!</span></p>
            <button className="login-btn">Log in <img src={rightarrow}/></button>
            </form>
</div>
{/* login-right */}
<div className="login-right">
<img src={image}/>
</div>
</div>
        </div>
        </div>
     );
}
 
export default Login;