const request = requestPromise("http://www.google.com");

/* request can either contain a promise that is resolved or unresolved */

/*
      1) if promise is resolved: then() is called
      2) else: then() is not called, but catch() is
*/
request
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Failed");
  });
