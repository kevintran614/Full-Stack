// defines the schema/layout for our collection

/*
    mongoose allows use to use javascript to structure/define our schema
    for our collection
*/

const mongoose = require("mongoose");

// this defines the schema for our collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy"],
  },
});

// this will create a model/compile our schema
// this provides an interface that allows us to interact with our database
// think of the model as like a class with methods and attributes
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
