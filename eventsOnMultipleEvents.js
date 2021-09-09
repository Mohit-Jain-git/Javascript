const colours = ["violet", "indigo", "blue", "gray", "yellow", "orange", "red"];
const container = document.querySelector("#boxes");

const changeColor = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};
for (let color of colours) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  // box.addEventListener("click", function () {
  // console.log(box.style.backgroundColor);
  // });
  box.addEventListener("mouseover", changeColor);
}
