const mongoose = require("mongoose");

// Connect MongoDB at default port 27017.
mongoose.connect("mongodb://127.0.0.1:27017/whisker_rebel_db", {
  useNewUrlParser: true,
});

// Create schema for products
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        return v.length <= 170;
      },
      message: (props) =>
        `${props.value} exceeds the maximum character count allowed!`,
    },
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  shop: { type: String, required: true },
  coverImage: { type: Buffer },
  detailsImage: { type: Buffer },
});

// Create model for the document based on the schema
const Product = mongoose.model("Product", productSchema);

// Create here the documents for the products


// Save the products to the database
// Product1.save();
// Product2.save();
// Product3.save();
// Product4.save();
// Product5.save();
// Product6.save();

// GET PRODUCTS FUNCTION
// const getAllDocuments = async () => {
//   try {
//     const res = await Product.find({shop: "shoes"});
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   }
// };
// getAllDocuments();

// UPDATE PRODUCTS FUNCTION
// const updateDocuments = async () => {
//   try {
//     const randomNumber = Math.floor(Math.random()*11);
//     const res = await Product.updateMany({},{$set: {stock: randomNumber }});
//     console.log(res);
//   }
//   catch (err) {
//     console.error(err);
//   }
// };
// updateDocuments();

module.exports = Product;