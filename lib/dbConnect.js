const pg = require('pg-promise')();

const config = process.env.DATABASE_URL || {
  host:        process.env.DB_HOST,
  port:        process.env.DB_PORT,
  database:    process.env.DB_NAME,
  user:        process.env.DB_USER,
  password:    process.env.DB_PASS,
  env:         process.env.DB_ENV
};
console.log(config)
const db = pg(config);

module.exports = db;
