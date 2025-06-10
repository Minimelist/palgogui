import "./Appnav.css";

function Appnav(props){
    return (
        <nav className="appnav">
            <a className="appnav-link" href="/dashboard">Dashboard</a>
            <a className="appnav-link" href="/portfolio">Portfolio</a>
            <a className="appnav-link" href="/trading">Trading</a>
            <a className="appnav-link" href="/settings">P.ALGO Settings</a>
            <a className="appnav-link" href="/toppicks">Top Picks</a>
        </nav>
    )
}

export default Appnav;