// const requestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection Timeout");
//       } else {
//         resolve("HERE IS YOUR FAKE DATA!");
//       }
//     }, delay);
//   });
// };

// const request = requestPromise("http://www.google.com");

// /* request can either contain a promise that is resolved or unresolved */

// /*
//       1) if promise is resolved: then() is called
//       2) else: then() is not called, but catch() is
// */
// request
//   .then(() => {
//     console.log("Success");
//   })
//   .catch(() => {
//     console.log("Failed");
//   });

// /* you can also nest .then() */
// requestPromise("http://www.google.com")
//   .then((data) => {
//     console.log("Success 1");
//     console.log(data);
//     return requestPromise("http://www.google.com");
//   })
//   .then((data) => {
//     console.log("Success 2");
//     console.log(data);
//     return requestPromise("http://www.google.com");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("Failed");
//   });

/* Promises */
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();

    setTimeout(() => {
      if (rand < 0.7) {
        resolve("HERE IS YOUR FAKE DATA");
      }

      reject("COULD NOT FULFILL PROMISE");
    }, 1000); // 1000 = 1 second
  });
};

fakeRequest("/kevin/23")
  .then((data) => {
    console.log("Done with request!");
    console.log(data); // data = resolve() "HERE IS YOUR FAKE DATA"
  })
  .catch((err) => {
    console.log("Did not fulfill request");
    console.log(err); // err = reject() "COULD NOT FULFILL PROMISE"
  });
