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

/* this is similar to python syntax */
for (let person in testScores) {
  console.log(person);
  console.log(testScores[person]);
}

// ------- functions -------
/* in javascript, we declare functions using "function" keyword vs. int, bool, etc. like in C++*/
function greet(person) {
  console.log(` Hi, ${person}!`);
}

greet("Kevin");

/*
instead of doing:

        int add(x, y) {
          return x + y;
        }

we can do:

        function add(x ,y) {
          return x + y;
        }
*/

// ------- function expressions -------
function add1(x, y) {
  return x + y;
}

// you can store a function in a variable
const add2 = function (x, y) {
  return x + y;
};

// you can pass a function as an argument
function callTwice(func) {
  func();
  func();
}

function printName() {
  console.log("Kevin is my first name");
}

callTwice(printName);

// you can return a function within a function
function makeMysteryFunc() {
  const rand = Math.random();

  if (rand > 0.5) {
    return function () {
      alert("YOU ARE A GOOD FUNCTION");
    };
  } else {
    return function () {
      alert("YOU ARE A BAD FUNCTION");
    };
  }
}

makeMysteryFunc();

// why should we return a function from a function?
function isBetween1(num) {
  return num >= 50 && num <= 100;
}

function isBetween2(num) {
  return num >= 1 && num <= 10;
}

isBetween1(65);
isBetween2(5);

/* but what if we don't want to hardcode (50, 100) and (1, 10) in our functions? */
/* answer: we can return a function from a function! */

function isBetween3(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const returnOfIsBetween3 = isBetween3(500, 1000);
// what returnOfIsBetween3 now holds is:

/*
            return function (num) {
              return num >= min && num <= max;
            };
*/

// where min = 500 and max = 1000

returnOfIsBetween3(600);

// ------- methods -------
/* a method is a property of an object that is a function */

const math = {
  /* multiply and divide are properties of the math object */
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
};

math.multiply(5, 5);
math.divide(20, 4);

// ------- this keyword -------
const cat = {
  name: "Kevin Tran",
  color: "Green",
  meow: function () {
    console.log(this.name);
  },
};
