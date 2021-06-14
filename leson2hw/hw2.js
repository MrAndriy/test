var x = 1;
var y = 2;

// res1 = String((x + y) *4 );
// console.log(res1);
// console.log(typeof res1); // "string"

// let res2 = y > x  // Допишіть код, необхідно використовувати змінні x і y
// res2=String(res2+"2")
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// var res3 = x < y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// var res4 = "hello" * x * y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"
// ________________________________________________________________________________________
// let enteredValue = +prompt();
// if (enteredValue % 2 == 0) {
//   alert(`the ${enteredValue} is even positive`); //	a) парним додатним
// }
// if (enteredValue % 2 == 1) {
//   alert(`the ${enteredValue} is  not even positive`);
// }
// if (enteredValue === 7) {
//   alert(`the ${enteredValue} is equal 7`); // 	b) кратним числу 7.
// } else {
//   alert(`the ${enteredValue} is not equal 7`);
// }
// ________________________________________________________________________________________
// let isAdult = +prompt(`Please enter your age`);
// if (isAdult >= 18) {
//   console.log(`You have reached the age of majority `);
// }
// if (isAdult < 18) {
//   console.log(`You are too young`);
// }
// ________________________________________________________________________________________
// let date = new Date();
// let currentHours = date.getHours();
// let currentMin = date.getMinutes();
// let currentSec = date.getSeconds();
// let grettingMornin = "Доброго ранку";
// let grettingDay = "Доброго дня";
// let grettingEvning = "Доброї вечора";
// let grettingNight = "Доброї ночі";

// let night =
//   0 <= currentHours &&
//   currentHours <= 4 &&
//   0 <= currentMin &&
//   currentMin <= 59 &&
//   0 <= currentSec &&
//   currentSec <= 59;
// let morning =
//   5 <= currentHours &&
//   currentHours <= 10 &&
//   0 <= currentMin &&
//   currentMin <= 59 &&
//   0 <= currentSec &&
//   currentSec <= 59;
// let day =
//   11 <= currentHours &&
//   currentHours <= 16 &&
//   0 <= currentMin &&
//   currentMin <= 59 &&
//   0 <= currentSec &&
//   currentSec <= 59;
// let evning =
//   17 <= currentHours &&
//   currentHours <= 23 &&
//   0 <= currentMin &&
//   currentMin <= 59 &&
//   0 <= currentSec &&
//   currentSec <= 59;

// if (night) {
//   console.log(
//     `${grettingNight} у Львові зараз ${currentHours}:${currentMin}:${currentSec}`
//   );
// }
// if (morning) {
//   console.log(
//     `${grettingMorninу} Львові зараз ${currentHours}:${currentMin}:${currentSec}`
//   );
// }
// if (day) {
//   console.log(
//     `${grettingDay} у Львові зараз ${currentHours}:${currentMin}:${currentSec}`
//   );
// }
// if (evning) {
//   console.log(
//     `${grettingEvning} у Львові зараз ${currentHours}:${currentMin}:${currentSec}`
//   );
// }
// ________________________________________________________________________________________

// let a = +prompt(`enter lenght of angle`);
// let squere = a ** 2;
// alert(`The squere is ${squere} `);
// ________________________________________________________________________________________
// let a, b, c;
// a = +prompt(`enter a`);
// b = +prompt(`enter b`);
// c = +prompt(`enter c`);
// if (a < b && b < c) {
//   console.log(`true ${a} < ${b} < ${c} `);
// } else {
//   console.log(`false ${a} < ${b} < ${c} `);
// }
