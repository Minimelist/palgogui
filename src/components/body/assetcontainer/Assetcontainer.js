import "./Assetcontainer.css";
import Assetoverview from './assetoverview/Assetoverview.js';
import Assetheadlines from "./assetheadlines/Assetheadlines.js";
import Assetscore from "./assetscores/Assetscore.js";
import Palgorating from "./palgorating/Palgorating.js";
import { formatDate } from '../../../utils/dateFormatter.js';

function Assetcontainer(props) {
  // Safely access rowData with default empty object
  const rowData = props.rowData || {};
  
  // Safely destructure with default values
  const {
    ticker,
    company_name,
    close_price,
    technical_score,
    fundamental_score,
    pcs,
    macro_sentiment,
    macro_summary,
    micro_sentiment,
    date_added,
  } = rowData;

  return (
    <div className="assetcontainer">
      <div className="assetcontainer-container">
        <div className="palgorating-container">
          {/* <Palgorating palgorating={palgorating} /> */}
          <Palgorating 
            palgorating={pcs} 
            date_added={formatDate(date_added)}
          />
        </div>
        <div className="assetoverview-container">
          <Assetoverview
            assetName={company_name}
            assetSymbol={ticker}
            // assetType="Stock" // Placeholder, replace with actual data if available
            currentValue={close_price}
            exchange="NASDAQ"
          />
        </div>
        <div className="assetscore-container">
          {/* <Assetscore
            technicalscore={technicalscore}
            financialscore={fundamentalscore}
            macroscore={macroscore}
            microscore={microscore}
          /> */}
          <Assetscore
            technicalscore={technical_score}
            financialscore={fundamental_score}
            macroscore= {macro_sentiment ? [macro_sentiment] : ["Not available"]}
            microscore= {micro_sentiment ? [micro_sentiment] : ["Not available"]}
          />
        </div>
        <div className="assetheadlines-container">
          <Assetheadlines headlines={macro_summary ? [macro_summary] : ["No summary available"]} />
        </div>
      </div>
    </div>
  );
}


export default Assetcontainer;