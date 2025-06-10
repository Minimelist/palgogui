import "./Assetscore.css";

function Assetscore(props) {
    return (
        <div className="assetscore">
            <div className="assetscore-container">
                <h2>Asset Score</h2>
                <p>Technical Score: {props.technicalscore}</p>
                <p>Financial Score: {props.financialscore}</p>
                <p>Macro Score: {props.macroscore}</p>
                <p>Micro Score: {props.microscore}</p>
            </div>
        </div>
    );
}

export default Assetscore;