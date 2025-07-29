require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER ,
  host: process.env.DB_HOST ,
  database: process.env.DB_NAME ,
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT ,
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL at:', res.rows[0].now);
  }
});

// API endpoint START

// API endpoint for Assetcontainer Data
app.get('/assetcontainer', async (req, res) => {
  try {
    // Replace 'with actual table name
    const { rows } = await pool.query('SELECT * FROM demodata LIMIT 100');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// API endpoint for Palgo Settings
app.get('/palgosettings', async (req, res) => {
  try {
    // Replace 'with actual table name
    const { rows } = await pool.query('SELECT * FROM assetindicatorsettings LIMIT 100');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//ADD MORE API ENDPOINTS AS NEEDED
// API endpoint END
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});