const mysql = require("mysql2");
const express = require("express");
const bodyparser = require("body-parser");
const allRoutes = require('./Routes/index.js')
const app = express();
// Configuring express server
app.use(bodyparser.json());
app.use("/api", allRoutes);

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "sample",
  port: "3306",
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.error("Connection Failed!", err);
  } else {
    console.log("Connection Established Successfully");
  }
});





const port = 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});
