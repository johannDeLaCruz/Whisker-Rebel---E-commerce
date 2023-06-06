// Requiring Modules
const express = require("express");
const ejs = require("ejs");
const Product = require("./productModel.js");
const User = require("./userModel.js")
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
  Product.find({ shop: "mensClothing" })
    .then((products) => {
      res.render("products_list", {
        shopName: "MEN'S CLOTHING",
        products,
        layout: false,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products");
    });
});

app.get("/womens_clothing", (req, res) => {
  Product.find({ shop: "womensClothing" })
    .then((products) => {
      res.render("products_list", {
        shopName: "WOMEN'S CLOTHING",
        products,
        layout: false,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products");
    });
});

app.get("/shoes", (req, res) => {
  Product.find({ shop: "shoes" })
    .then((products) => {
      res.render("products_list", {
        shopName: "SHOES",
        products,
        layout: false,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products");
    });
});

app.get("/apparel", (req, res) => {
  Product.find({ shop: "apparel" })
    .then((products) => {
      res.render("products_list", {
        shopName: "APPAREL",
        products,
        layout: false,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving products");
    });
});
// Product Details Page routing
app.get("/product/:productId", (req, res) => {
  Product.findOne({ _id: req.params.productId })
    .then((product) => {
      res.render("product_page", { product, layout: false });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving product");
    });
});
// CART page routing
app.get("/cart", async (req, res) => {
  try {
    const user = await User.findOne({ username: "default" });
    res.render("cart", { cartItems: user.cart, layout: false });
  } catch (err) {
    console.error("Error fetching user cart:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Add to CART logic
app.post("/add-to-cart/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const user = await User.findOne({ username: "default" });
    const product = await Product.findById(productId);

    if (user && product) {
      user.cart.push(product);
      await user.save();
      res.redirect("/cart");
    } else {
      res.status(404).send("Product or user not found");
    }
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Remove from CART logic
app.post("/remove-from-cart/:productId", async (req, res) => {
  const { productId } = req.params;
  try {
    const user = await User.findOne({ username: "default" });
    const productIndex = user.cart.findIndex(
      (item) => item._id.toString() === productId
    );

    if (user && productIndex !== -1) {
      user.cart.splice(productIndex, 1);
      await user.save();
      res.redirect("/cart");
    } else {
      res.status(404).send("Product or user not found");
    }
  } catch (err) {
    console.error("Error removing from cart:", err);
    res.status(500).send("Internal Server Error");
  }
});

// SERVER LISTENING SETUP
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
