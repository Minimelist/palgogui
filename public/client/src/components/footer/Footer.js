import "./Footer.css";
import Footernav from "./footnav/Footernav.js";

function Footer(props) {
    return (
        <footer className="footer">
            <Footernav />
            <div className="footer-content">
                <p>&copy; {props.year} P.ALGO. All rights reserved.</p>
            </div>
            
        </footer>
    )
}
export default Footer;