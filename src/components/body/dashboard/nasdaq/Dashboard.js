// create more cards for dashboard to include more markets. copy and paste this file and add more api endpoints in server.js and also create navigation for filtering

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dashcontainer from './Dashcontainer.js'; // Import the Dashcontainer component

export default function Dashboard() {
  const [dash, setDash] = useState(null); // Explicitly initialize as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDash();
  }, []);

  const fetchDash = () => {
    setLoading(true);
    axios.get('http://localhost:5000/dashboard')
      .then(response => {
        setDash(response.data); // Fixed: using response.data
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching dashboard:", error);
        setLoading(false);
        setDash(null); // Explicitly set to null on error
      });
  };

  if (loading) return <div>Loading settings...</div>;
  if (!dash) return <div>No settings found.</div>;

  console.log('Dash data:', dash);
  return (
    <div>
      <div>This is the Page for Dashboard</div>
      {dash.map((row) => {
        console.log('Mapping row:', row); // Check each row
        return <Dashcontainer key={row.id} rowData={row} />;
      })}
    </div>
  );

}