// Default Parameters

// function multiply(x, y) {
//   if (typeof y === "undefined") {
//     y = 1;
//   }
//   return x * y;
// }

function multiply(x, y = 1) {
  return x * y;
}

// const greet = (person, greeting = "hi") => {
//   console.log(`${greeting},${person}!`);
// };

// const greet = (person, greeting = "hi") => {
//   console.log(greeting, person);
// };

// Spread For Functions

// const num = [1, 2, 3, 4];
// console.log(Math.max(...num)); // Spread Function

// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [...num1, ...num2];
// const num4 = [...num1, ...num2, 7, 8, 9];

// const feline = {
//   legs: 4,
//   family: "horses",
// };

// const dogs = {
//   legs: 5,
//   family: "dog",
//   hen: "bared",
// };

// const num = {
//   ...feline,
//   ...dogs,
// };

// function sum() {
//   const args = [...arguments];
//   return args.reduce((total, curr) => {
//     return total + curr;
//   });
// }

// function fullName(first, last) {
//   console.log(arguments);
// }

// REST PARAMETERS

// function sum(...nums) {
//   return nums.reduce((total, curr) => {
//     return total + curr;
//   });
// }

// ARRAY DESTRUCTURING

const race = ["mohit", "rohit", "harsh", "ajay", "jain", "naman"];
// const gold = race[0];
// const silver = race[1];
// const diam = race[2];
// const red = race;

const [gold, silver, bronze, diam] = race;
// const [first, , , fourth] = race;
// const [first, ...others] = race;

// OBJECTS DESTRUCTURING

const run = {
  first: "mohit",
  last: "jain",
  country: "india",
  title: "engineer",
};

const { first, last } = run;
const { country: nation, title: value } = run;
