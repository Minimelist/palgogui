import "./Assetoverview.css";

function Assetoverview(props) {
    return(
        <div className="assetoverview">
            <div className="assetoverview-innercontainer">
                <h2>Asset Overview</h2>
                <p>Asset Name: {props.assetName} - {props.assetSymbol}</p>
                {/* <p>Asset Type: {props.assetType}</p> */}
                <p>Current Value: ${props.currentValue}</p>
                <p>Exchange: {props.exchange}</p>
                <p>Recommended Stop Loss: {props.stop_loss}</p>
                <p>Max Position Size: {props.max_position_size}</p>
                <p>Max Position Value: {props.max_position_value}</p>
            </div>
        </div>
    )
}

export default Assetoverview;
