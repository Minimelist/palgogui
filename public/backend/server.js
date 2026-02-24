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
// app.get('/assetcontainer', async (req, res) => {
//   try {
//     // Replace 'with actual table name
//     const { rows } = await pool.query('SELECT * FROM demodata ORDER BY palgorating DESC LIMIT 100 ');
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
app.get('/assetcontainer', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT * 
      FROM nt20_palgo 
      WHERE date_added = CURRENT_DATE
    `); 
    // have to use JOIN to get the details for each asset and take the OGS or other strategy table.
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// app.get('/assetcontainer', async (req, res) => {
//   try {
//     // Replace 'with actual table name
//     const { rows } = await pool.query('SELECT * FROM nt20_palgo');
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
// API endpoint for PAWM Settings
app.get('/pawmsettings', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM pawmsettings');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// API endpoint for Palgo Settings
app.get('/palgosettings', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM palgosettings');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/dashboard', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM nasdaq LIMIT 2');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// UPDATE
// app.put('/palgosettings', async (req, res) => {
//   try {
//     const { pbbtop, pbbbot, pstotop, pstobot } = req.body;
    
//     // Update the existing row (assuming one exists)
//     const { rows } = await pool.query(
//       'UPDATE assetindicatorsettings SET pbbtop = $1, pbbbot = $2, pstotop = $3, pstobot = $4 RETURNING *',
//       [pbbtop, pbbbot, pstotop, pstobot]
//     );
    
//     if (rows.length === 0) {
//       return res.status(404).json({ error: 'No settings found to update' });
//     }
    
//     res.json(rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
//ADD MORE API ENDPOINTS AS NEEDED
// API endpoint END
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});