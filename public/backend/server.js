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
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
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
// app.get('/assetcontainer', async (req, res) => {
//   try {
//     const { rows } = await pool.query(`
// SELECT 
//     n.ticker,
//     n.company_name,
//     n.close_price,
//     n.palgo_bb,
//     n.palgo_sto,
//     n.palgo_atr,
//     n.palgo_rsi,
//     n.palgo_macd,
//     n.palgo_nop,
//     n.palgo_she,
//     n.palgo_investing,
//     n.palgo_candlestick,
//     n.macro_sentiment,
//     n.micro_sentiment,
//     n.macro_summary,
//     n.stop_loss,
//     n.max_position_size,
//     n.max_position_value,
//     o.technical_score,
//     o.fundamental_score,
//     o.micro_score,
//     o.macro_score,
//     o.pcs,
//     m.screener,
//     n.date_added
// FROM nt20_palgo n
// INNER JOIN (
//     SELECT MAX(date_added) as max_date 
//     FROM nt20_palgo
// ) max_n ON n.date_added = max_n.max_date
// INNER JOIN ogs_palgo o ON n.ticker = o.ticker 
//     AND o.date_added = n.date_added
// LEFT JOIN most_actives_2026_03_10_day m ON n.ticker = m.symbol
// ORDER BY o.pcs DESC;
//     `);
//     // have to use JOIN to get the details for each asset and take the OGS or other strategy table.
//     res.json(rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
app.get('/assetcontainer', async (req, res) => {
  try {
    // Get today's date in YYYY_MM_DD format
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const tableName = `most_actives_${year}_${month}_${day}`;
    
    // You might want to add error handling if the table doesn't exist yet
    // For example, you could fall back to the most recent available date
    
    const { rows } = await pool.query(`
SELECT 
    n.ticker,
    n.company_name,
    n.close_price,
    n.palgo_bb,
    n.palgo_sto,
    n.palgo_atr,
    n.atr_takeprofit,
    n.palgo_rsi,
    n.palgo_macd,
    n.palgo_nop,
    n.palgo_she,
    n.palgo_investing,
    n.palgo_candlestick,
    n.macro_sentiment,
    n.micro_sentiment,
    n.macro_summary,
    n.stop_loss,
    n.max_position_size,
    n.max_position_value,
    o.technical_score,
    o.fundamental_score,
    o.micro_score,
    o.macro_score,
    o.pcs,
    m.screener,
    n.date_added
FROM nt20_palgo n
INNER JOIN (
    SELECT MAX(date_added) as max_date 
    FROM nt20_palgo
) max_n ON n.date_added = max_n.max_date
INNER JOIN ogs_palgo o ON n.ticker = o.ticker 
    AND o.date_added = n.date_added
LEFT JOIN ${tableName} m ON n.ticker = m.symbol
ORDER BY o.pcs DESC;
    `);
    
    res.json(rows);
  } catch (err) {
    console.error(err);
    // Check if error is due to missing table
    if (err.code === '42P01') { // Undefined table error code
      res.status(404).json({ error: `Table ${tableName} does not exist for today's date` });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
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