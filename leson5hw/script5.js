// function testThrow(exception) {
//   try {
//     throw exception;
//   } catch (error) {
//     console.log(`Caught : ${error}`);
//   }
// }

// testThrow(5);
// testThrow("Test");
// testThrow(new Error("An error happened"));

//task № 2

// function calcRectangleArea() {
//   var widthInput;
//   widthInput = +prompt("enter width of the rectangle");
//   let heightInput;
//   heightInput = +prompt("enter height of the rectangle");
//   try {

//     if (isNaN(widthInput || heightInput)) {
//       throw new Error("no numeric parameters passed ");
//     }
//     if (widthInput || heightInput > 0) {
//       res = ((widthInput * heightInput) / 2);
//       console.log(res);
//     }
//   } catch (exception) {
//     console.log(`start working catch __________________`);
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
//     console.log(`End working catch _____________________`);
//   }
// }

// calcRectangleArea()

//task № 3

// function checkAge(age) {
//   this.ageInput = age; // для виконання юзером цю строку закоментити

//   // let age; // для вводу користувачем
//   // age = ageInput // для вводу користувачем
//   // ageInput = +prompt("Enter your age!", ""); // для вводу користувачем
//   try {
//     // console.log(`start working try`)
//     // console.log(` тип вводу:  ${(typeof ageInput)} :  ввiд  -> ${(ageInput)}`); // перевіряєм тип вводу

//     if (ageInput > 13) {
//       window.open("https://www.youtube.com/watch?v=YYXbQjPAIdY")
//     }

//     //виконуємо умови доступу до відео
//     if (ageInput < 14 && ageInput > 0) {
//       throw new Error(`you are not Adult`)
//     }

//     //якщо пуста строка
//     if (ageInput === "" || ageInput == 0 || ageInput === undefined) {
//       throw new Error(`“The field is empty! Please enter your age”`)
//     }

//     // якщо не числове значення
//     if (isNaN(ageInput)) {
//       throw new Error(`Something wrong please enter the "numbers"`)
//     }

//     // console.log(`end working try`)

//   } catch (exception) {
//     // console.log(`start working catch __________________`);
//     console.log(exception.name);
//     console.log(exception.message);
//     console.log(exception.stack);
//     // console.log(`End working catch _____________________`);
//   }
// }

// let user1 = " 13";
// console.log(`User 1 : age 13 `);
// checkAge(user1);
// // _______________________________________________________
// let user2 = "   "; // пусті строки "space"
// console.log(`User 2 : "     " `);
// checkAge(user2);
// // _______________________________________________________
// let user3 = "15 fds"; //юзер ввід число і букви
// console.log(`user 3 : "15fds" `);
// checkAge(user3);
// // _______________________________________________________
// let user4; //не визначення перемінна
// console.log(`user 4 : `);
// checkAge(user4);
// // _______________________________________________________
// let user = "15"; // adult // дорослий
// console.log(`User : 15`);
// checkAge(user);

//task № 4

// class MonthException {
//   constructor(message) {
//     this.message = message;
//   }
// }



// function showMonthName(month) {
//   this.month = month;
//   //створив консту масив з порядковим номером місяця
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];
//   try {
//     if (month <= 11) {
//       return console.log(`The curent month is ${monthNames[month]}`);
//     }
//     if (month > 11 || month === "" || month == 0 || month === undefined || isNaN(month)) {
//       throw new MonthException(`Incorrect month number`);
//     }
//   } catch (bag) {
//     console.log(bag);
//     console.log(bag.message);
//   }
// }

// showMonthName(0);
// showMonthName(1);
// showMonthName(2);
// showMonthName(3);
// showMonthName(4);
// showMonthName(5);
// showMonthName(6);
// showMonthName(7);
// showMonthName(8);
// showMonthName(9);
// showMonthName(10);
// showMonthName(11);
// showMonthName("sAFS");