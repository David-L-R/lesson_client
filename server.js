const express = require("express");
const res = require("express/lib/response");
const users = require("./users.json");

const app = express();

// GET all users
app.get("/users", (request, response) => {
  // error handling
  if (!users || users.length === 0) {
    response.status(500).send({ error: "Users were not found" });
    return;
  }

  response.status(200).send(users);
});

// GET user :id
app.get("/users/:id", (request, response) => {
  const { id } = request.params;

  // if no id sent
  if (!id || id === "") {
    response.status(400).send({ error: "id was not sent" });
    return;
  }

  const user = users.find((user) => user._id === id);

  // wrong id
  if (!user) {
    return response.status(400).send({ error: "user was not found" });
  }

  response.status(200).send(user);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
