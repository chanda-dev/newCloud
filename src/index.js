const mysql = require('mysql2');
require('dotenv').config();
const express = require('express');
const app = express();
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = connection; // Export the connection object