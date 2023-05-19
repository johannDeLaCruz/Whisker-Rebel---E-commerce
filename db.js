const mongoose = require("mongoose");

// Connect MongoDB at default port 27017.
mongoose.connect("mongodb+srv://johanndelacruz2023:johanndelacruz2023@cluster0.p5gnwka.mongodb.net/whisker_rebel_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
  coverImage: { type: String },
  detailsImage: { type: String },
  stockQuantity: {type: Number, required: true}
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
//     const res = await Product.find({shop: "womensClothing"});
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
//     const res = await Product.updateMany({},{$set: {stockQuantity: randomNumber }});
//     console.log(res);
//   }
//   catch (err) {
//     console.error(err);
//   }
// };
// updateDocuments();

// UPDATE PRODUCTS FUNCTION
// const updateDocuments = async () => {
//   try {
//     const res = await Product.updateMany({}, { $set: { coverImage: "", detailsImage: "" } });
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   }
// };
// updateDocuments();

module.exports = Product;
