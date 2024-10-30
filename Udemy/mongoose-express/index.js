// backend for endpoints

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");

/* connecting to MongoDB */
mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("MongoDB connection open...");
  })
  .catch((err) => {
    console.log("MongoDB connection failed...");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*
    allows us to process a post request and access
    the request body immediately 
*/
app.use(express.urlencoded({ extended: true }));

/*
    allows us to "fake" a put/patch request
*/
app.use(methodOverride("_method"));

// ======================= //
/* routes and endpoints */
// ======================= //

/* home route, show all products */
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("products/index", { products });
});

// ======================= //

/* (C): create new product */
// 1. form view to create a new product
app.get("/products/new", (req, res) => {
  res.render("products/new");
});

// 2. after making a new product, we send a POST request
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
});

// ======================= //

/* (R): show specific product */
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/show", { product });
});

// ======================= //

/* (U): update new product */
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

// ======================= //

/* (D): delete a product */
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
