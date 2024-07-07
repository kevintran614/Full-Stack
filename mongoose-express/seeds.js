// pre-populates our collection with dummy data

const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("MongoDB connection open...");
  })
  .catch((err) => {
    console.log("MongoDB connection failed...");
    console.log(err);
  });

const seedProducts = [
  {
    name: "Kevin Tran",
    price: 23.99,
    category: "vegetable",
  },
  {
    name: "Michael Le",
    price: 24.0,
    category: "fruit",
  },
  {
    name: "Superman",
    price: 99.99,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
