import "./Header.css";
import Usernav from "./usernav/Usernav.js";

function Header(props) {
    return (
        <header className="header">
            <div className="logoContainer">{props.logo}</div>
            <span className="name">{props.title}</span>
            <Usernav />
        </header>
    )
}

export default Header;