///////////////////////////////////////////////////////////////////////////////////////
//                          server.js: stores all of our routes                     //
///////////////////////////////////////////////////////////////////////////////////////

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  // root route http://localhost:5001/
  res.send("hello word!!! updated change again change change more");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`listening on this port ${PORT}`));
