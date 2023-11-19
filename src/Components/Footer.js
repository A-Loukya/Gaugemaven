import logo from "../Images/logo.svg"
import instagram from "../Images/instagram.svg"
import twitter from "../Images/twitter.svg"
import {Link} from "react-router-dom"
import "../css/Footer.css"
const Footer = () => {
    return ( 
        <div >
            <footer className="footer">
                <div className="footer1">
                    <img src={logo} className="logo"/>
                    <p>© 2023 Gaugemaven, Inc.
All rights reserved.</p>
                </div>
                <div>
                    <h6>ABOUT GAUGEMAVEN</h6>
                    <p><Link to="/dashboard">Home</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/faq">FAQ</Link></p>
                </div>
                <div>
                    <h6>NOT QUITE READY FOR GAUGEMAVEN?</h6>
                    <p>Contact us:<span> gaugemaven@gmail.com</span></p>
                    <p>Follow us to know more</p>
                    <div className="social-media">
                        <img src={instagram}/>
                        <img src={twitter}/>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;