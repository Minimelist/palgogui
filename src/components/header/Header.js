import "./Header.css";
import Usernav from "./usernav/Usernav.js";
import Appnav from "./appnav/Appnav.js";

function Header(props) {
    return (
        <header className="header">
            <div className="topheader">
                <div className="logoContainer">{props.logo}</div>
                <span className="name">{props.title}</span>
                <Usernav />
            </div>
            <Appnav />
        </header>

    )
}

export default Header;