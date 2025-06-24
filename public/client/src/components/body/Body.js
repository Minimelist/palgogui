import "./Body.css";
import Sidebar from './sidebar/Sidebar.js';
import Assetcontainer from "./assetcontainer/Assetcontainer.js";

function Body() {
    return (
        <div className="body">
            {/* <Sidebar filter="This is the side bar"/> */}
            <div className="body-container">
                <div className="content">
                    <Assetcontainer />
                    <Assetcontainer />
                    <Assetcontainer />
                </div>
            </div>
        </div>
    )
}

export default Body;