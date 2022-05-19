const express = require("express");
const users = require("./users.json");

const app = express();

// GET all users

// GET user :id

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
