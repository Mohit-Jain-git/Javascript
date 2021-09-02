const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function (num) {
//   console.log(num * 2);
// });

// function printTriple(n) {
//   console.log(n * 3);
// }

// numbers.forEach(printTriple);

// const double = numbers.map(function (num) {
//   return num * 2;
// });

// const number = numbers.map(function (n) {
//   return {
//     value: n,
//     isEven: n % 2 === 0,
//   };
// });

// const words = ["asap", "abbs", "rsvp", "ghtp"];
// const double = words.map(function (w) {
//   return w.toUpperCase().split("").join(".");
// });

// ARROW FUNCTIONS

// const square = (x) => {
//   return x * x;
// };

// const isEven = (num) => {
//   return num % 2 === 0;
// };

// const square = (n) => n * n;

// const square = (n) => n * n;

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];

// const double1 = nums.map((n) => {
//   return n * 2;
// });

// const double2 = nums.map((n) => n * n);

// const parityList = nums.map(function (n) {
//   if (n % 2 === 0) return "even";
//   else return "odd";
// });

// const parity = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// const par = nums.map((n) => (n % 2 === 0 ? "even" : "odd"));

// let movies = [
//   "The Fantastic Mr. Fox",
//   "Mr. and Mrs. Smith",
//   "Mrs.Doubtfire",
//   "Mr. Deeds",
// ];

// const movie = movies.find((m) => {
//   return m.indexOf("Mrs") === 0;
// });

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const odds = nums.filter((n) => n % 2 === 1);
// const evens = nums.filter((n) => n % 2 === 0);
// const bignums = nums.filter((n) => n > 5);

// const words = ["dog", "dig", "log", "bag", "wag"];
// const all = words.every((w) => w.length === 3);

// const first = words.some((w) => w[0] === "d");

//  Sort Function

// const prices = [200, 100, 40, 400, 210, 30, 555];

// const asc = prices.slice().sort((a, b) => a - b);
// const dsc = prices.slice().sort((a, b) => b - a);

// REDUCE

const nums = [3, 4, 5, 6, 7];
const product = nums.reduce((total, current) => {
  return total * current;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// const maxGrade = grades.reduce((max, curr) => {
//   if (curr > max) return curr;
//   return max;
// });

const maxGrade = grades.reduce((max, curr) => {
  return Math.max(max, curr);
});

const minGrade = grades.reduce((min, curr) => {
  return Math.min(min, curr);
});

const sum = [10, 20, 30, 40, 50].reduce((sum, curr) => {
  return sum + curr;
}, 1000);

const votes = ["y", "y", "n", "n", "n", "y", "y", "y", "n", "y", "n", "n"];
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++;
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {});

const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
