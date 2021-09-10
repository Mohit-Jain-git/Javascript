const creditcard = document.querySelector("#cc");
const check = document.querySelector("#terms");
const vegetable = document.querySelector("#veggie");

const formData = {};
for (let input of [creditcard, check, vegetable]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}

// creditcard.addEventListener("input", (e) => {
//   console.log("CC Changed!!", e);
//   formData["cc"] = e.target.value;
// });

// vegetable.addEventListener("input", (e) => {
//   console.log("Veggie", e);
//   formData["veggie"] = e.target.value;
// });

// check.addEventListener("input", (e) => {
//   console.log("terms", e);
//   formData["terms"] = e.target.checked;
// });
