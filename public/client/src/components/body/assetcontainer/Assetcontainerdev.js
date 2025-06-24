import "./Assetcontainer.css";
import Assetoverview from './assetoverview/Assetoverview.js';
import Assetheadlines from "./assetheadlines/Assetheadlines.js";
import Assetscore from "./assetscores/Assetscore.js";
import Palgorating from "./palgorating/Palgorating.js";
import {useState,useEffect} from "react";
export default function MongoDBDataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint that connects to MongoDB
        const response = await fetch('http://mongodb://localhost:27017/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>MongoDB Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id || item.id}>
            {/* Adjust this based on your data structure */}
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function Assetcontainer(props) {
//     const [ticker, setTicker] = useState("AAPL");
//     const [data, setData] = useState();

//     useEffect(()=>{
//         fetch(API)
//         .then(response=>response.json())
//         .then(data=>setData(data))
//         .catch(error=>console.log("Error in retrieving data"))
//     })

//     return (
//         <div className="assetcontainer">
//             <div className="assetcontainer-container">
//                 <div className="palgorating-container">
//                     <Palgorating palgoscore="80" />
//                 </div>
//                 <div className="assetoverview-container">
//                     <Assetoverview
//                         assetName="Apple Inc."
//                         assetSymbol="APPL"
//                         assetType="Stock"
//                         currentValue="150.00"
//                         exchange="NASDAQ"
//                     />
//                 </div>
//                 <div className="assetscore-container">
//                     <Assetscore
//                         technicalscore="80"
//                         financialscore="75"
//                         macroscore="70"
//                         microscore="90"
//                     />
//                 </div>
//                 <div className="assetheadlines-container">
//                     <Assetheadlines headlines={["Headline 1", "Headline 2", "Headline 3"]} />
//                 </div>
//             </div>
//         </div>



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
//     );
// }

// export default Assetcontainer;