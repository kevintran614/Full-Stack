/* async functions */

/* 
        1. Automatically returns a Promise
        2. If there is an error in our async function, the promise will return a reject()
        3. Else, the promise will be resolved with whatever is returned in our async function
*/

const sing = async () => {
  //   throw "OH NO";
  return "LA LA LA LA";
};

sing()
  .then((data) => {
    console.log("Promise resolved with:", data); // ex: data = "LA LA LA LA"
  })
  .catch((err) => {
    console.log("Promise rejected:", err); // err = "OH NO"
  });

/* await */

/* 
        1. Makes the code synchronous --> executes line by line
        2. Will wait for one code to completely execute before proceeding with next line of code
        3. await must be used in conjunction with async
        4. WAITS until a promise is resolved before proceeding with next line.
*/

async function test1() {
  await sing();
  console.log("sing 1");
  await sing();
  console.log("sing 2");
  await sing();
  console.log("sing 3");
}

/* error handling in async functions */
async function test2() {
  try {
    let data1 = await sing();
    console.log(data1); // only if resolved
  } catch (error) {
    console.log("Caught an error:", error); // only if rejected
  }
}
