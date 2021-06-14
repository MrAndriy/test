// let array = [2, 3, 4, 5];
// let sum = 1;
// for (let index = 0; index < array.length; index++) {
//   sum *= array[index];
// }
// console.log(sum);

// за допомогою циклу "While"
// let i = 0; // на 5 завданні необхідно змінну розкоментувати
// while (i < array.length) {
//   sum *= array[i];
//   i++;
// }
// console.log(sum);

// ____________________________________________________________________
// for (let index = 0; index <= 15; index++) {
//   if (index % 2 == 0) {
//     console.log(`${index} is even`);
//   } else {
//     console.log(`${index} is odd`);
//   }
// }
// ____________________________________________________________________
// function randArray(value) {
//   let arrayK = [];
//   let minNumb = 1;
//   let maxNumb = 500;
//   for (let index = 0; index < value; index++) {
//     arrayK.push(Math.floor(Math.random() * (maxNumb - minNumb) + minNumb));
//   }
//   return arrayK;
// }
// ____________________________________________________________________

// function raiseToDegree() {
//   let a = +prompt(`Enter the value of A`);
//   let b = +prompt(`Enter the value of B`);
//   if (a <= 0 || b <= 0) {
//     return `enter a number greater than zero`;
//   }
//   let raiseToDegree = a ** b;
//   return `the raise to degree ${a} to ${b} is ${raiseToDegree}`;
// }
// ____________________________________________________________________

// function lastElem(array = [], value) {
//   if (value === undefined) {
//     value = 1;
//   }
//   let x = -1;
//   return array.slice(value * x);
// }
// console.log(lastElem([3, 4, 10, -5])); // -5
// console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
// console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]
// ___________________________________________________________________

String.prototype.firstLetterCaps = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

let someText = "i love java script";
function bigWords(someText) {
  let arr = someText.split(" ");
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    if (i == arr.length - 1) {
      out += arr[i].firstLetterCaps();
    } else {
      out += arr[i].firstLetterCaps() + " ";
    }
  }
  return out;
}
