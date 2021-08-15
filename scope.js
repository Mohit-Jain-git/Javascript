// function doubleArray(arr) {
//   var time = 9;
//   let result = [];
//   for (let num of arr) {
//     let double = num * 2;
//     result.push(double);
//   }
//   return result;
// }

// console.log(time);

// function outer() {
//   let movie = "Amadeus";
//   function inner() {
//     let movie = "Bhuj-The Pride Of India";
//     console.log(movie.toUpperCase());
//     function extraInner() {
//       console.log(movie.toUpperCase());
//     }
//     extraInner();
//   }
//   inner();
// }

// const add = function (x, y) {
//   return x + y;
// };

// let mul = function multiply(x, y) {
//   return x * y;
// };

// function add(x, y) {
//   return x + y;
// }
// const sub = function (x, y) {
//   return x - y;
// };
// function mul(x, y) {
//   return x * y;
// }
// const div = function (x, y) {
//   return x / y;
// };

// const operations = [add, sub, mul, div];

// for (let func of operations) {
//   let res = func(30, 10);
//   console.log(res);
// }

// const thing = {
//   doSomething: mul,
// };

// function callThreeTimes(f) {
//   f();
//   f();
//   f();
// }

// function cry() {
//   console.log("I cry too much");
// }

// function repeatNtimes(action, num) {
//   for (let i = 0; i < num; i++) {
//     action();
//   }
// }

// repeatNtimes(cry, 13);

// function multiply(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const double = multiply(2);
// const triple = multiply(3);
// const halve = multiply(0.5);

// function makeBetweenFunc(x, y) {
//   return function (num) {
//     return num >= x && num <= y;
//   };
// }

// const isChild = makeBetweenFunc(0, 18);

// setTimeout(function () {
//   alert("Welcome");
// }, 5000);

function grumpus() {
  alert("Hello World!");
}

const btn = document.querySelector("button");
btn.addEventListener("click", grumpus);
