import "./Palgorating.css";
function Palgorating({palgorating, date_added}) {
  return (
    <div className="palgorating">
      <div className="palgorating-innercontainer">
        <h2>Palgorating</h2>
        <p>PCS Rating: {palgorating}</p>
        <p>Date Added: {date_added}</p>
      </div>
    </div>
  );
}

export default Palgorating;