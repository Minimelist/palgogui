// src/components/DataDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Assetcontainerdev from './assetcontainer/Assetcontainer.js'; // Import the Assetcontainer component

function DataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/assetcontainer') // Adjust the URL if necessary
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

  console.log('API data:', data);

  return (
    <div>
      {data.map((row) => {
        console.log('Mapping row:', row); // Check each row
        return <Assetcontainerdev key={row.id} rowData={row} />;
      })}
    </div>
  );
}

export default DataDisplay;