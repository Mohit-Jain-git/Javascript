// async function getPlanets() {
//   const res = await axios.get("http://swapi.co/api/planets/");
//   console.log(res.data);
// }
// getPlanets();

async function getPlanets() {
  try {
    const res = await axios.get("http://swapi.co/api/plmwedbkwbkanets/");
    console.log(res.data);
  } catch (e) {
    console.log("In catch!!!");
  }
}
getPlanets();
