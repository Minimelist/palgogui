import "./Assetheadlines.css";


function Assetheadlines(props) {
    return (
        <div className="assetheadlines">
            <div className="assetheadlines-innercontainer">
                <h2>Asset Headlines</h2>
                <ul>
                    {props.headlines.map((headline, index) => (
                        <li key={index}>{headline}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Assetheadlines;