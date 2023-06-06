const mongoose = require("mongoose");

// Connect MongoDB at default port 27017.
mongoose.connect(
  "mongodb+srv://johanndelacruz2023:johanndelacruz2023@cluster0.p5gnwka.mongodb.net/whisker_rebel_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
// Create schema for the products
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
    stockQuantity: { type: Number, required: true },
  });
// Create schema for the users
const userSchema = new mongoose.Schema({
    // userId: { type: Number, required: true },
    username: { type: String, required: true },
    cart: [productSchema],
  });
  
  // Create model for the document based on User Schema
  const User = mongoose.model("User", userSchema);
  
  // const defaultUser = new User({ username: 'default', cart: [] });
  // defaultUser.save();

  module.exports = User;
  