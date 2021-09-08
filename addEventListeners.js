// const btn = document.querySelector("button");
// // btn.onclick = function () {
// //   console.log("You clicked me.");
// // };

// btn.addEventListener("click", function () {
//   alert("you clicked me!!");
// });

// btn.addEventListener("click", function () {
//   console.log("Second Thing!!");
// });

// btn.addEventListener("mouseover", function () {
//   btn.innerText = "Stop touching me!";
// });

// btn.addEventListener("mouseout", function () {
//   btn.innerText = "Click Me!";
// });

// window.addEventListener("scroll", function () {
//   console.log("Stop Scrolling");
// });
const btn = document.querySelector("button");
btn.addEventListener("mouseover", function () {
  console.log("Mouse Over Me!");
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener("click", function () {
  btn.innerText = "You Got Me!";
  document.body.style.backgroundColor = "green";
});
