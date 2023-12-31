const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi, I am Root");
});

// Index - users
app.get("/users", (req, res) => {
  res.send("GET for users");
});

// Show - users
app.get("/users/:id", (req, res) => {
    res.send("GET for show users id");
});

// POST - users
app.post("/users", (req, res) => {
  res.send("POST for users");
});

//DELETE - users
app.delete("/users/:id", (req, res) => {
  res.send("DELETE for users id");
});

// Index - posts
app.get("/posts", (req, res) => {
  res.send("GET for posts");
});

// Show - posts
app.get("/users/:id", (req, res) => {
    res.send("GET for show post id");
});

// POST - posts
app.post("/users", (req, res) => {
  res.send("POST for posts");
});

//DELETE - posts
app.delete("/users/:id", (req, res) => {
  res.send("DELETE for post id");
});

app.listen(3000, () => {
  console.log("Listening to Port 3000");
});
