const mongoose = require("mongoose");

// Connect MongoDB at default port 27017.
mongoose.connect("mongodb://127.0.0.1:27017/whisker_rebel_db", {
  useNewUrlParser: true,
});

// Create schema for products
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  shop: String,
  coverImage: Buffer,
  detailsImage: Buffer,
});

// Create model for the document based on the schema
const Product = mongoose.model("Product", productSchema);

// Create documents for the products
const product1 = new Product({
  name: "Rebel Leather Jacket",
  description:
    "Unleash your inner rebel with this leather jacket. Crafted from premium leather, this jacket features a sleek design with multiple pockets and zippers. Perfect for making a statement, no matter where you go.",
  price: 199.99,
  shop: "mensClothing",
});

const product2 = new Product({
  name: "Denim Biker Jacket",
  description:
    "Get ready to rock and roll with this denim biker jacket. Edgy, stylish, and oh-so-comfortable, this jacket is a must-have for any fashion-forward man. Perfect for making a lasting impression, whether you're heading out for a night on the town or simply running errands.",
  price: 149.99,
  shop: "mensClothing",
});

const product3 = new Product({
  name: "Black Leather Jeans",
  description:
    "Take your style game to the next level with these black leather jeans. Made from high-quality leather, these jeans are both durable and comfortable. With their sleek design and attention to detail, they're the perfect addition to any rebel's wardrobe.",
  price: 249.99,
  shop: "mensClothing",
});

const product4 = new Product({
  name: "Hooded Parka",
  description:
    "Stay warm and stylish this winter with this hooded parka. Crafted from high-quality materials, this parka features multiple pockets, a faux fur trim, and a sleek design that's perfect for any occasion. Whether you're hitting the slopes or simply running errands, this parka has got you covered.",
  price: 179.99,
  shop: "mensClothing",
});

const product5 = new Product({
  name: "Faux Leather Bomber Jacket",
  description:
    "Make a bold statement with this faux leather bomber jacket. With its sleek design, attention to detail, and high-quality materials, this jacket is the perfect addition to any rebel's wardrobe. Dress it up or down, this jacket is versatile enough for any occasion.",
  price: 99.99,
  shop: "mensClothing",
});

const product6 = new Product({
  name: "Distressed Denim Jacket",
  description:
    "Make heads turn with this distressed denim jacket. Edgy, stylish, and oh-so-comfortable, this jacket is a must-have for any fashion-forward man. With its distressed details and attention to detail, this jacket is perfect for making a lasting impression.",
  price: 129.99,
  shop: "mensClothing",
});

module.exports = Product;
// Save the products to the database
// product1.save();
// product2.save();
// product3.save();
// product4.save();
// product5.save();
// product6.save();
