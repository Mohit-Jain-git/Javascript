const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("IT WORKED!!!");
  console.log(firstReq.responseText);
  console.log(JSON.parse(firstReq.responseText));
  // console.log(data);
});
firstReq.addEventListener("error", () => {
  console.log("ERROR!!!");
});
firstReq.open("GET", "https://swapi.co/api/planets/");
firstReq.send();
console.log("REQUEST SENT!!!");
