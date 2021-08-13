// function isValid(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   )
//     return false;
//   else return true;
// }

// function avg(arr) {
//   let sum = 0;
//   for (let x of arr) {
//     sum = sum + x;
//   }
//   let res = sum / arr.length;
//   return res;
// }

// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     if (lowerCased.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// function getCard() {
//   const values = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const Valueidx = Math.floor(Math.random() * values.length);
//   const value = values[Valueidx];
//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   const Suitidx = Math.floor(Math.random() * suits.length);
//   const suit = suits[Suitidx];
//   return { value: value, suit: suit };
// }
