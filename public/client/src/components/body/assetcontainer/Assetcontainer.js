import "./Assetcontainer.css";
import Assetoverview from './assetoverview/Assetoverview.js';
import Assetheadlines from "./assetheadlines/Assetheadlines.js";
import Assetscore from "./assetscores/Assetscore.js";
import Palgorating from "./palgorating/Palgorating.js";

function Assetcontainer(props) {
    
    return (
        <div className="assetcontainer">
            <div className="assetcontainer-container">
                <div className="palgorating-container">
                    <Palgorating palgoscore="80" />
                </div>
                <div className="assetoverview-container">
                    <Assetoverview
                        assetName="Apple Inc."
                        assetSymbol="APPL"
                        assetType="Stock"
                        currentValue="150.00"
                        exchange="NASDAQ"
                    />
                </div>
                <div className="assetscore-container">
                    <Assetscore
                        technicalscore="80"
                        financialscore="75"
                        macroscore="70"
                        microscore="90"
                    />
                </div>
                <div className="assetheadlines-container">
                    <Assetheadlines headlines={["Headline 1", "Headline 2", "Headline 3"]} />
                </div>
            </div>
        </div>
        //     <div className="assetcontainer">
        // <div className="assetcontainer-container">
        //     <Palgorating palgoscore={props.palgoscore} />
        //     <Assetoverview
        //         assetName={props.assetName}
        //         assetSymbol={props.assetSymbol}
        //         assetType={props.assetType}
        //         currentValue={props.currentValue}
        //         exchange={props.exchange}
        //     />
        //     <Assetscore
        //         technicalscore={props.technicalscore}
        //         financialscore={props.financialscore}
        //         macroscore={props.macroscore}
        //         microscore={props.microscore}
        //     />
        //     <Assetheadlines headlines={props.headlines} />
        // </div>
        // </div>
    );
}

export default Assetcontainer;