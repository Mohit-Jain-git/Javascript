const addItems = document.querySelector("#addItems");
const itemsUL = document.querySelector("#items");

addItems.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    const newItems = this.value;
    const item = document.createElement("li");
    item.innerText = newItems;
    itemsUL.appendChild(item);
    this.value = "";
  }
});
