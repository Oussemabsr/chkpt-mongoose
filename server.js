// 1 rerquire express
const express = require("express");

// 2 create instance
const app = express();

// 5 require dotenv
require('dotenv').config();

// 8 middleware body-parser
app.use(express.json())

// 6 coonectDB
const coonectDB = require("./config/connectDB");
coonectDB;

// 7 routes
app.use("/api/contact", require("./routes/contact"));

// 3create PORT
const PORT = process.env.PORT

// 4 create server
app.listen(PORT,(error) => {
  error ?
  console.error("Failed to connect !!!{err}") :
  console.log("Server running on port ${PORT} ...");
});
