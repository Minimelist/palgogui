import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Settingscontainer from './Settingscontainer.js'; // Import the Settingscontainer component

function Settings() {
  const [settings, setSettings] = useState(null); // Explicitly initialize as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = () => {
    setLoading(true);
    axios.get('http://localhost:5000/palgosettings')
      .then(response => {
        setSettings(response.data); // Fixed: using response.data
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching settings:", error);
        setLoading(false);
        setSettings(null); // Explicitly set to null on error
      });
  };

  if (loading) return <div>Loading settings...</div>;
  if (!settings) return <div>No settings found.</div>;

  console.log('Settings data:', settings);
  return (
    <div>
      {settings.map((row) => {
        console.log('Mapping row:', row); // Check each row
        return <Settingscontainer key={row.id} rowData={row} />;
      })}
    </div>
  );

}

export default Settings;