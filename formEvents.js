const creditcard = document.querySelector("#cc");
const check = document.querySelector("#terms");
const vegetable = document.querySelector("#veggie");

const form = document.querySelector("#signup-form");

form.addEventListener("submit", function (e) {
  alert("Submitted the form!!");
  e.preventDefault();
  console.log("cc", creditcard.value);
  console.log("terms", check.value);
  console.log("veggie", vegetable.value);
});
