import Indivpawm from "./Indivpawm.js";

function Pawmcontainer(props) {
  // Safely access rowData with default empty object
  const rowData = props.rowData || {};

  // Safely destructure with default values
  const {
    PAWMCODE,
    AssetIndicator,
    Weight
  } = rowData;

  console.log('Pawmcontainer received:', props.rowData);
  return (
    <div className="pawmcontainer">
      <div className="pawmcontainer-container">
        <Indivpawm settingscode={PAWMCODE} settingsname={AssetIndicator} value={Weight} />
      </div>
    </div>
  );
}


export default Pawmcontainer;