/* fetch */

/*
        1. res.json() can be used to return an actual
           json object in the event our promise prematurely resolves.
        2. fetch makes a HTTP request and returns a promise that
           can be resolved/rejected.
        3. await pauses execution of the async function until
           the promise is RESOLVED/REJECTED from the fetch() call. 
           Therefore, "test" won't print right away until after promise is resolved.
        4. async keyword = automatically assume a promise is returned.
*/

/* method 1: chaining .then() */
const loadStarWarsPeople1 = () => {
  fetch("https://swapi.dev/api/people/1")
    .then((res) => {
      console.log("Resolved", res);
      return res.json();
    })
    .then((data) => {
      console.log("JSON done", data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
  console.log("This logs first, before data is fetched");
};

/* method 2: using async and await */
const loadStarWarsPeople2 = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log("Resolved data:", data);
    console.log("I won't print until after promise from fetch is resolved");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

loadStarWarsPeople2();
console.log("I will print first, before the async call is done");
