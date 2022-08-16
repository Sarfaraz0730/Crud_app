const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  console.log("get request");
  res.send("Crud App");
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
