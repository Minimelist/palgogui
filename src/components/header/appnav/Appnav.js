import "./Appnav.css";
import { NavLink } from "react-router-dom";

function Appnav(props) {
    return (
        // <nav className="appnav">
        //     <a className="appnav-link" href="/">Body</a>
        //     <a className="appnav-link" href="/dashboard">Dashboard</a>
        //     <a className="appnav-link" href="/portfolio">Portfolio</a>
        //     <a className="appnav-link" href="/watchlist">Watchlist</a>
        //     <a className="appnav-link" href="/settings">P.ALGO Settings</a>
        // </nav>
        <nav className="appnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/watchlist">Watchlist</NavLink>
            <NavLink to="/settings">P.ALGO Settings</NavLink>
        </nav>
    )
}

export default Appnav;