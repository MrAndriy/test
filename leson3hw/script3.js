// var number = [2, 3, 4, 5];
// var res = 1;

//за допомогою циклу "for"
// for (var i = 0; i < number.length; i++) {
//   res *= number[i];
// }

//за допомогою циклу "While"
// var i = 0; // на 5 завданні необхідно змінну розкоментувати
// while (i < number.length) {
//   res *= number[i];
//   i++;
// }
// console.log(res);

// task № 2

// let numbers = 0;
// for (numbers = 0; numbers < 16; numbers++) {
//   if (numbers % 2 == 0) {
//     console.log(numbers + " is even");
//   } else {
//     console.log(numbers + " is odd");
//   }
// }

//task № 3

// function randArray(value) {
//   let arr = [];

//   let min = Math.ceil(1);
//   // створив максимальне значення числового вводу
//   let max = Math.floor(500);
//   // створює рендомне число
//   //   Math.floor(Math.random() * (max - min) + min);
//   do {
//     arr.push(Math.floor(Math.random() * (max - min) + min));
//   } while (arr.length < value);
//   return arr;
// }

//   //створив мінімальне значення числового вводу
//     let min = Math.ceil(1);
//     // створив максимальне значення числового вводу
//     let max = Math.floor(500);
//     // створює рендомне число
//     Math.floor(Math.random() * (max - min) + min);

// створив пустий масив, в який вставив функцію рандомного цілого числа
// let k = [];
// k[0] = randArray(k);
// k[1] = randArray(k);
// k[2] = randArray(k);
// k[3] = randArray(k);
// k[4] = randArray(k);
// console.log(k);

// // task № 4

// function raiseToDegree(a, b) {
//   let result = a;

//   for (let i = 1; i < b; i++) {
//     result *= a;
//   }
//   return result;
// }

// let a = +prompt("a ??", "");

// let b = +prompt("b ??", "");

// if (b < 1) {
//   console.log("something is wrong =/");
// } else {
//   console.log(
//     "raiseToDegree " +
//       "(" +
//       a +
//       "," +
//       b +
//       ")" +
//       ";" +
//       " // " +
//       raiseToDegree(a, b)
//   );
// }

//task № 5

// function lastElem(array = [], value) {
//   if (value === undefined) {
//     value = 1;
//   }

//   let x = -1; // для того щоб вивести з кінця значення необхід "-"" значення
//   return array.slice(value * x);
// }
// // перевірив згідно взірця все працює ок
// console.log(lastElem([3, 4, 10, -5])); // -5
// console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
// console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

//task № 6

// function myfunc() {
//   return this.replace(/[^\s-]+/g, function(txt) {
//     return txt[0].toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// var sameWords = prompt("Enter somthing");

// console.log(myfunc.apply(sameWords));
