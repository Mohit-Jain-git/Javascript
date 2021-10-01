// fetch("https://catfact.ninja/fact")
//   .then((response) => {
//     console.log(response);
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG!!!");
//   });

// fetch("https://catfact.ninja/factasd")
//   .then((response) => {
//     if (!response.ok) {
//       console.log("Error : ", response.status);
//     } else {
//       console.log(response);
//       response.json().then((data) => {
//         console.log(data);
//       });
//     }
//   })
//   .catch((err) => {
//     console.log("SOMETHING WENT WRONG!!!");
//   });

fetch("https://catfact.ninja/facteffrr")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG!!!");
  });
