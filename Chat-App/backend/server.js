const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // root route http://localhost:5001/
  res.send("hello word!!! updated change again change");
});

app.listen(5001, () => console.log("listening on this port 5001"));
