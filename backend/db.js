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

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

pool.connect()
  .then(() => console.log("Postgres connected"))
  .catch((err) => console.error("Postgres connection error:", err));

export default pool;
