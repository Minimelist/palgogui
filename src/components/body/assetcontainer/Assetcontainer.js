import "./Assetcontainer.css";
import Assetoverview from './assetoverview/Assetoverview.js';
import Assetheadlines from "./assetheadlines/Assetheadlines.js";
import Assetscore from "./assetscores/Assetscore.js";
import Palgorating from "./palgorating/Palgorating.js";

function Assetcontainer(props) {
  // Safely access rowData with default empty object
  const rowData = props.rowData || {};
  
  // Safely destructure with default values
  const {
    id ,
    palgorating,
    technicalscore,
    fundamentalscore,
    macroscore,
    microscore,
    assetname
  } = rowData;

  return (
    <div className="assetcontainer">
      <div className="assetcontainer-container">
        <div className="palgorating-container">
          <Palgorating palgorating={palgorating} />
        </div>
        <div className="assetoverview-container">
          <Assetoverview
            assetName={assetname || 'Apple Inc.'}
            assetSymbol="APPL"
            assetType="Stock"
            currentValue="150.00"
            exchange="NASDAQ"
          />
        </div>
        <div className="assetscore-container">
          <Assetscore
            technicalscore={technicalscore}
            financialscore={fundamentalscore}
            macroscore={macroscore}
            microscore={microscore}
          />
        </div>
        <div className="assetheadlines-container">
          <Assetheadlines headlines={["Headline 1", "Headline 2", "Headline 3"]} />
        </div>
      </div>
    </div>
  );
}


export default Assetcontainer;