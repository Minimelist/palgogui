import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Settings() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/palgosettings') // Adjust the URL if necessary
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
  const {
    PBBTop ,
    PBBBot,
    PSTOTop,
    PSTOBot,
  } = data[0];

  return (
    <div>
      <h2>P.ALGO Settings</h2>
      <div>
        <h3>Settings Overview</h3>
        <p><strong>PBB Top:</strong> {PBBTop}</p>
        <p><strong>PBB Bottom:</strong> {PBBBot}</p>
        <p><strong>PSTO Top:</strong> {PSTOTop}</p>
        <p><strong>PSTO Bottom:</strong> {PSTOBot}</p>
      </div>
    </div>
  );
}

export default Settings;