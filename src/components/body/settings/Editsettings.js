// FOR FUTURE INPUT: This code is part of a React application that allows users to edit settings related to a trading algorithm. The settings include parameters for Bollinger Bands and Stochastic indicators. The component fetches the current settings from a backend server, allows users to edit them, and saves the changes back to the server.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Editsettings() {
  const [settings, setSettings] = useState();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = () => {
    setLoading(true);
    axios.get('http://localhost:5000/palgosettings')
      .then(response => {
        setSettings(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching settings:", error);
        setLoading(false);
      },[]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    fetchSettings(); // Reset to original values
    setIsEditing(false);
  };

  const handleSave = () => {
    axios.put('http://localhost:5000/palgosettings', settings)
      .then(response => {
        setSettings(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating settings:', error);
      });
  };

  if (loading) return <div>Loading settings...</div>;
  
  const { pbbtop, pbbbot, pstotop, pstobot } = settings;
  
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>P.ALGO Settings</h2>

      {isEditing ? (
        <div style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>PBB Top:</label>
            <input
              type="number"
              name="pbbtop"
              value={pbbtop}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>PBB Bottom:</label>
            <input
              type="number"
              name="pbbbot"
              value={pbbbot}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>PSTO Top:</label>
            <input
              type="number"
              name="pstotop"
              value={pstotop}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>PSTO Bottom:</label>
            <input
              type="number"
              name="pstobot"
              value={pstobot}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div>
            <button
              onClick={handleSave}
              style={{
                padding: '8px 16px',
                marginRight: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '5px',
          marginBottom: '20px'
        }}>
          <div style={{ marginBottom: '15px' }}>
            <strong>PBB Top:</strong> {pbbtop}
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong>PBB Bottom:</strong> {pbbbot}
          </div>
          <div style={{ marginBottom: '15px' }}>
            <strong>PSTO Top:</strong> {pstotop}
          </div>
          <div style={{ marginBottom: '20px' }}>
            <strong>PSTO Bottom:</strong> {pstobot}
          </div>
          <button
            onClick={handleEditClick}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Edit Settings
          </button>
        </div>
      )}
    </div>
  );
}

export default Editsettings;