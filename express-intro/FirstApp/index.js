const express = require("express");
const app = express();

/* this is what we respond with when our server gets a request */
// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!");
//   res.send("<h1>Hi, this is our server response!</h1>");
// });

/* req and res */

/*
        1. Express makes a request object based off our http request.
        2. Express makes a response object.
*/

/* =============== */

/* routes */

/*
        1. /cats => meow
        2. /dogs => woof
*/

app.get("/", (req, res) => {
  res.send("WELCOME TO OUR HOME PAGE!");
});

app.get("/cats", (req, res) => {
  res.send("MEOW!");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!");
});

/* placing a ":" in front of a variable makes it a path parameter */
/* this applies to any routes with the following format: /r/SOMETHING */
app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(
    `<h1>Viewing the ${postId} postID on the ${subreddit} subreddit</h1>`
  );
});

/* query strings */

/*
        1. http://localhost:3000/search?q=bob
        2. bob is our query 
*/

app.get("/search", (req, res) => {
  const { q } = req.query; // Destructure `query` from `req.query`
  res.send(`<h1>Search results for: ${q}</h1>`);
});

/* '*' can be used for invalid routes */
app.get("*", (req, res) => {
  res.send("I DON'T KNOW THAT PATH!");
});

/* this is our server listening for requests */
app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
