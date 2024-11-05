///////////////////////////////////////////////////////////////////////////////////////
//                          server.js: stores all of our routes                     //
///////////////////////////////////////////////////////////////////////////////////////

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // to parse incoming requests (from req.body from auth.controller.js)

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`listening on this port ${PORT}`);
});
