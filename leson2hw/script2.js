// var x = 1;
// var y = 2;
// var res1 = String((x + y) * 4);
// console.log(res1);
// console.log(typeof res1); // "string"

// var res2 = String(x <= y);
// console.log(res2 + "2");
// console.log(typeof res2); // "string"

// var res3 = Boolean(2 > 1);
// console.log(res3);
// console.log(typeof res3); // "boolean"

// var res4 = "Hello kitty" * x * y;
// console.log(res4); // Допишіть код, необхідно використовувати змінні x і y // NaN
// console.log(typeof res4); // "number"

// task № 2
// let n = prompt("Enter your number");
// // a)
// if (n % 2 == 0 && n > 0) {
//   console.log("The number is " + n + " paired positive");
// } else if (n % 1 == 0 && n > 0) {
//   console.log("The number is " + n + " odd positive");
// } else {
//   console.log("The number is " + n + "  negative");
// }
// b)
// if (n == 7) {
//   console.log(n + " is a multiple of 7");
// } else {
//   console.log(n + " not a multiple of 7");
// }

// task № 3
// let age = prompt("How old are you?");
// if (age > 18) {
//   alert("You've reached the age of majority");
// } else {
//   alert("You are still too young");
// }

// task № 4

// let a = +prompt("Enter the 1 angle value", "cm");
// if (a <= 0 || isNaN(a)) {
//   alert("Incorect data");
// }
// let b = +prompt("Enter the 2 angle value", "cm");
// if (b <= 0 || isNaN(b)) {
//   alert("Incorect data");
// }
// let c = +prompt("Enter the 3 angle value", "cm");
// if (c <= 0 || isNaN(c)) {
//   alert("Incorect data");
// }

// a) визначити і вивести в консоль площу трикутника

// let p = (a + b + c) / 2;
// let sABC = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2);
// if (sABC > 0) {
//   console.log("the area of ​​the triangle " + sABC.toFixed(3));
// }
// if (isNaN(sABC) || sABC == 0) {
//   console.log("Incorect data");
// }

// b)перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.

// if (
//   a ** 2 === b ** 2 + c ** 2 ||
//   b ** 2 === a ** 2 + c ** 2 ||
//   c ** 2 === a ** 2 + b ** 2
// ) {
//   console.log("Трикутник прямокутний");
// }

// task № 5

// let currentDate = new Date();
// let time = currentDate.getHours();

// if (time <= 4) {
//   console.log("Доброї ночі!");
// }
// if (time >= 5 && time <= 10) {
//   alert("Доброго ранку!");
// }
// if (time >= 11 && time <= 16) {
//   alert("Доброго дня!");
// }
// if (time >= 17 && time <= 22) {
//   alert("Доброго вечора!");
// }
// if (time == 23) {
//   console.log("Доброї ночі!");
// }

// let message =
//   (time >= 23 && time < 5 && "Доброї ночі!") ||
//   (time >= 5 && time < 11 && "Доброго ранку!") ||
//   (time >= 11 && time < 17 && "Доброго дня!") ||
//   (time >= 17 && time < 23 && "Добрый ночі!");
// alert(message);

//task № 6

// let arr = [];
// arr[0] = 12;
// arr[1] = "15";
// arr[2] = arr[0] < arr[1];
// arr[3] = null;
// alert(arr.length);
// arr[6] = prompt("enteer any value");
// alert(arr[6]);
