import "./Sidebar.css";

function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                {props.filter}
            </div>
        </div>
    )
}

export default Sidebar;