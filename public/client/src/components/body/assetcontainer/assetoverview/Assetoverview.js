import "./Assetoverview.css";

function Assetoverview(props) {
    return(
        <div className="assetoverview">
            <div className="assetoverview-innercontainer">
                <h2>Asset Overview</h2>
                <p>Asset Name: {props.assetName} - {props.assetSymbol}</p>
                <p>Asset Type: {props.assetType}</p>
                <p>Current Value: ${props.currentValue}</p>
                <p>Exchange: {props.exchange}</p>
            </div>
        </div>
    )
}

export default Assetoverview;
