// 1. Ways to print in Javascript
// console.log("Hello World");
// alert("Hello , it's me");
// document.write("This is document write");

// 2. Javascript console API
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("This is warning");
// console.error("This is an error");

// 3. Javascript Variables
var num1 = 56;
var num2 = 34;
// console.log(num1 + num2);
// console.log(num2 - num1);
// console.log(num1 * num2);
// console.log(num1 / num2);

// 4. Data Types in Javascript
// Numbers
var num1 = 455;
var num2 = 56.76;

// String
var str1 = "This is a string.";
var str2 = "This is also a string";

// Objects
var marks = {
  ravi: 34,
  shubham: 78,
  harry: 99.977,
};

// Booleans
var a = true;
var b = false;
// console.log(a, b);
// console.log(num1);
// console.log(num2);
// console.log(str1);
// console.log(str2);
// console.log(marks);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

var arr = [1, 2, 3, 4, 5];
// console.log(arr);

/*function avg(a, b) {
  return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     break;
//   }
//   console.log(arr[i]);
// }
/*
arr.forEach(function (element) {
  console.log(element);
});
*/

// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// let j = 0;
// do {
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);

// let myDate = new Date();
// console.log(myDate.getTime());

// DOM Manipulation
var elem = document.getElementById("click");
console.log(elem);

var elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].style.border = "4px solid red";
elemClass[0].style.padding = "10px 10px";
elemClass[0].classList.add("bg-primary");

elemClass[1].style.border = "4px solid green";
elemClass[1].style.padding = "10px 10px";
elemClass[1].style.background = "red";

tn = document.getElementsByTagName("div");
console.log(tn);
createdElement = document.createElement("p");
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement("p");
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// Selecting using Query
// sel = document.querySelector(".container");
// console.log(sel);
// sel = document.querySelectorAll(".container");
// console.log(sel);

// function clicked() {
//   console.log("The button was clicked");
// }

// window.onload = function () {
//   console.log("The document was loaded");
// };
// Events in Javascript

// firstContainer.addEventListener("click", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b> We have clicked</b>";
//   console.log("Clicked on Container");
// });

// firstContainer.addEventListener("mouseover", function () {
//   console.log("Mouse on Container");
// });

// firstContainer.addEventListener("mouseout", function () {
//   console.log("Mouse out of Container");
// });

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseup", function () {
//   document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//   console.log("Mouse up when clicked on Container");
// });

// firstContainer.addEventListener("mousedown", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b> We have clicked</b>";
//   console.log("Mouse down when clicked on  Container");
// });

// Arrow Functions
// function summ(a, b) {
//   return a + b;
// }
// summ = (a, b) => {
//   return a + b;
// };

log = () => {
  document.querySelectorAll(".container")[1].innerHTML =
    "<b> We have clicked</b>";
  console.log("I am your log");
};

// Set Timeout and Set Interval
// setTimeout(log, 2000);
// clr = setInterval(log, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// Javascript Local Storage
// localStorage.setItem("name", "mohit");
// localStorage
// localStorage.getItem('name');

// JSON
// obj = { name: "mohit", length: 1 };
// jso = JSON.stringify(obj);
// console.log(jso);
// parsed = JSON.parse(`{"name":"mohit","length":1}`);
// console.log(parsed);

// Template literals - Backticks
a = 25;
console.log(`this is my ${a}`);
