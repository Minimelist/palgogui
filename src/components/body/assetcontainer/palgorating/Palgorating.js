import "./Palgorating.css";

function Palgorating(props) {
    return (
        <div className="palgorating">
            <div className="palgorating-innercontainer">
                <h2>Palgorating</h2>
                <p>Overall Rating: {props.palgoscore}</p>
            </div>
        </div>
    );
}

export default Palgorating;