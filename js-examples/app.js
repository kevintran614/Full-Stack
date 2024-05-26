console.log("Hello Kevin!");

if (1 + 1 === 2) {
  console.log("1 + 1 == 2!");
}

let random = Math.random();

if (random < 0.5) {
  console.log("< 0.5!");
}

const password = prompt("enter a password");
console.log(password);

// ------- arrays -------
const myArr = [1, 2, 3]; // making an array makes an REFERENCE to the array
myArr.push(4);
/* even though you declared myArr as const, you can still mutate the arr. 
   BUT you can't change the actual "shell"/addr of the arr. 
   You can change what's "inside" the arr 
   but not the actual "shell"/addr itself
*/

let nums = [1, 2, 3];
let numsCopy = nums; // here, numsCopy = the address of nums

console.log(nums === numsCopy); // comparing whether the addr of nums == numsCopy

// ------- objects -------
let person = {
  /* 1) objects are similar to dictionaries where you have a key:value pair
     2) objects turn keys into strings 
  */
  firstName: "Kevin",
  lastName: "Tran",
};

console.log(person["lastName"]); // have to put key in quotes to access

// ------- for loops -------
const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

let userResponse = parseInt(prompt("Enter the maximum number!"));

while (!userResponse) {
  userResponse = parseInt(prompt("Enter the maximum number!"));
}

const target = Math.floor(Math.random() * userResponse) + 1;
console.log(target);

const userGuess = parseInt(prompt("Enter your guess!"));

while (userGuess != target) {
  userGuess = parseInt(prompt("Enter your guess!"));
}

console.log("You got it!");

// ------- for of loops -------
// adding test message
