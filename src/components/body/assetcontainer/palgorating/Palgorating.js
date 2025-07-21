import "./Palgorating.css";
function Palgorating({ palgorating}) {
  return (
    <div className="palgorating">
      <div className="palgorating-innercontainer">
        <h2>Palgorating</h2>
        <p>Overall Rating: {palgorating}</p>
      </div>
    </div>
  );
}

export default Palgorating;