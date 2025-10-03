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
import pkg from 'pg';
const { Pool } = pkg;

// Create a connection pool using your DATABASE_URL from Render
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for Render Postgres
  },
});

// Export a query function you can use in controllers
export default {
  query: (text, params) => pool.query(text, params),
};
