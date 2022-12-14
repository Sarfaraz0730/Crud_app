const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//log request
app.use(morgan("tiny"));
//parse request to body parser

app.use(bodyparser.urlencoded({ extended: true }));

// set view engine

app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname,"views/ejs"))

// load assets using  middleware method

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/css", express.static(path.resolve(__dirname, "assets/img")));
app.use("/css", express.static(path.resolve(__dirname, "assets/js")));

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
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
