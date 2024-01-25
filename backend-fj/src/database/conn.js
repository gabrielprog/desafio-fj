import { Pool } from 'pg';
import 'dotenv/config';

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: 5432,
  database: process.env.DB_NAME,
};

const pool = new Pool(dbConfig);

export default {
  query: (text, params) => pool.query(text, params),
};
