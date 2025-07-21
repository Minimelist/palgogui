// src/components/DataDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataDisplayRow from './DataDisplayRow.js';

function DataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data.length) return <div>No data found.</div>;

  return (
    <div>
      <h2>PostgreSQL Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PalgoRating</th>
            <th>TechnicalScore</th>
            <th>FundamentalScore</th>
            <th>MacroScore</th>
            <th>MicroScore</th>
            <th>AssetName</th>
            {/* Add more headers to match your row component */}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <DataDisplayRow key={row.id} rowData={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataDisplay;