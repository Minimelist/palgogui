// to import CSS styles
import Indivsettings from "./Indivsettings.js";

function Settingscontainer(props) {
  // Safely access rowData with default empty object
  const rowData = props.rowData || {};

  // Safely destructure with default values
  const {
    AICODE,
    AssetIndicator,
    Value
  } = rowData;
  console.log('Settingscontainer received:', props.rowData);
  return (
    <div className="settingscontainer">
      <div className="settingscontainer-container">
        <Indivsettings settingscode={AICODE} settingsname={AssetIndicator} value={Value} />
      </div>
    </div>
  );
}


export default Settingscontainer;