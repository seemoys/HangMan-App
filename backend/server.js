const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS properly
app.use(cors({
  origin: 'http://localhost:5173', // Frontend origin
  credentials: true                // Allow cookies/auth if needed
}));

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DB_URL
});

// Root route
app.get('/', (req, res) => {
  res.send('✅ Hangman API is running!');
});

// Words route
app.get('/words', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT word_value AS "wordValue", word_hint AS "wordHint" FROM words order by random() limit 1'
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching words:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
