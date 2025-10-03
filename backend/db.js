// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
// });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
//   pool,
// };

// const db = require('./db');
// const result = await db.query('SELECT * FROM users');
// console.log(result.rows);

// backend/db.js
// db.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for Render Postgres
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
