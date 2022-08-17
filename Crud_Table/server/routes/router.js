const express = require('express');

const route =express.Router()

app.get("/", (req, res) => {
  console.log(" home page  request");
  res.render("index.ejs");
});

app.get("/add-user", (req, res) => {
  console.log("Got request of add-user");
  res.render("add_user");
});

app.get("/update-user", (req, res) => {
  console.log("Got request of update-user");
  res.render("update_user");
});


module.exports =route