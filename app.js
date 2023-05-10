const express = require("express");
const ejs = require("ejs");
const port = 3000;
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules"));


// Set pages routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/mens_clothing", (req, res) => {
  res.render("products_list", { shopName: "MEN'S CLOTHING" });
});
app.get("/womens_clothing", (req, res) => {
  res.render("products_list", { shopName: "WOMEN'S CLOTHING" });
});
app.get("/shoes", (req, res) => {
  res.render("products_list", { shopName: "SHOES" });
});
app.get("/apparel", (req, res) => {
  res.render("products_list", { shopName: "APPAREL" });
});

// SERVER LISTENING SETUP
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
