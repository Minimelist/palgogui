// to import CSS styles
import Indivdash from "./Indivdash.js";

function Settingscontainer(props) {
  // Safely access rowData with default empty object
  const rowData = props.rowData || {};

  // Safely destructure with default values
  const {
    ticker,
    name,
    initial,
    sector,
    industry
  } = rowData;
  console.log('Dashcontainer received:', props.rowData);
  return (
    <div className="dashcontainer">
      <div className="dashcontainer-container">
        <Indivdash ticker={ticker} assetname={name} initials={initial} sector={sector} industry={industry} /> {/* Pass initials instead of initial */}
      </div>
    </div>
  );
}


export default Settingscontainer;