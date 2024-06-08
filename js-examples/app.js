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

// THE FOLLOWING FUNCTIONS WILL ACCEPT FUNCTION CALLBACKS AS AN ARGUMENT : forEach, map, filter, reduce
// ------- for each (1) -------
const numbers = [1, 2, 3, 4, 5];

/* for each will console.log each el in numbers */
/* forEach accepts a function callback as its parameter */
/* forEach will call this function for each element in the arr */
numbers.forEach(function (el) {
  console.log(el);
});

/* similar to doing a for of loop */
for (let el of numbers) {
  console.log(el);
}

// ------- map (2) -------
const numArr = [1, 2, 3, 4, 5];

/* map accepts a function callback */
/* will return a NEW arr */

const doublesArr = numArr.map(function (num) {
  return num * 2;
});

// ------- arrow functions -------
/* allows you to create a function without using the "function" keyword */
const addVer1 = function (x, y) {
  return x * y;
};

const addVer2 = (x, y) => {
  return x * y;
};

const greet2 = (name) => {
  return `Hey ${name}!`;
};

// ------- arrow functions implicit returns -------
/* only works if function body is ONE line */
/* does not require return keyword */
const rollDie1 = () => {
  return 1 + 1;
};

const rollDie2 = () => 1 + 1;
rollDie2();

const movies = [
  {
    title: "Alien",
    score: 90,
  },
  {
    title: "Billy Bob",
    score: 85,
  },
];

const newMovies1 = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`;
});

const newMovies2 = movies.map(
  (movie) => `${movie.title} - ${movie.score / 10}`
);

// ------- function summary -------
const isEven1 = function (num) {
  return num % 2 === 0;
};

const isEven2 = (num) => {
  return num % 2 === 0;
};

const isEven3 = (num) => num % 2 === 0;

// ------- filter (3) -------
const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

/* filter creates a NEW array, calls a function callback as an argument */
const newMyNums = myNums.filter((n) => n > 4);

// ------- reduce (4) -------
/* reduces all elements of an array to a SINGLE value */
/* reduce accepts 2 arguments: 
       1) an accumulator/total 
       2) the current element in the arr
*/

const prices = [1, 2, 3, 4, 5];

const total = prices.reduce((total, price) => total + price);

// ------- default parameters -------
function sayHello1(name = "Kevin Tran") {
  console.log(name);
}

sayHello1();

const sayHello2 = (name) => console.log(name);

// ------- spread -------
/* you can use spread to create a COPY of an iterable */

/* Example 1 */
spreadNums = [1, 2, 3, 4, , 5];

Math.max(1, 2, 3, 4, 5);

/* this is the same as above */
Math.max(...spreadNums);

/* Example 2 */
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

/* this saves us the trouble of manually typing out each name */
const allPets = [...cats, ...dogs]; // "Blue", "Scout", "Rocket", "Rusty", "Wyatt"

/* Example 3 */
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };
const catDog = { ...feline, ...canine };

/* you can also add new properties to the object */
const newCatDog = { ...feline, ...canine, id: "Kevin", isAwesome: true };

// ------- rest parameters -------
function sum1(nums) {
  return nums; // 3
}

sum1(3, 5, 7); // the sum function would only accept 3 and ignore 5/6

function sum2(...nums) {
  return nums; // [5, 10, 15]
}

sum2(5, 10, 15); // 5, 10, 15 would be stored in an array called nums
