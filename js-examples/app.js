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

// ------- string formatting -------
let myName = "Bob";
console.log(` Hi, ${myName}!`);

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

// ------- for "of" loops -------
const foods = ["poke", "sushi", "cold noodles"];

for (let food of foods) {
  console.log(food);
}

// ------- for "in" loops -------
const testScores = {
  Kevin: 100,
  Kelly: 100,
  Brian: 100,
};

for (let person in testScores) {
  console.log(person);
  console.log(testScores[person]);
}

// ------- functions -------
function greet(person) {
  console.log(` Hi, ${person}!`);
}

greet("Kevin");
