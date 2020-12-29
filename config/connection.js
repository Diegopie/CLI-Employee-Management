const mysql = require('mysql')
require('dotenv').config();

let connection = mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      // hide password
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });

connection.connect(function(err) {
  if(err) {
      console.log("error connecting: " + err.stack);
      return;
  }
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;