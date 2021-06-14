// звичайний обєкт
// всі значення в JS є обєкти
// let employer = {
//   firstName: "Andriy",
//   lastName: "Mriy",
//   position: "traine",
//   experience: 0,
// };

// console.log(
//   `доступаємось через крапочку ключ -> значення ${employer.firstName}`
// ); //доступаємось через крапочку ключ -> значення
// console.log(
//   `доступаємось через квадратні дужки ключ -> значення ${employer["lastName"]}`
// ); //доступаємось через квадратні дужки ключ -> значення

// // додавання до об'єкту employer через крапочку нові поля з значенням
// employer.sally = 500;
// console.log(employer.sally);
// employer["age"] = 29;
// console.log(employer["age"]);

//JS Object. Method

// let employer = {
//   firstName: "Andriy",
//   lastName: "Mriy",
//   position: "traine",
//   experience: 0,
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(employer.fullName());

//JS creating objects

// let employer2 = new Object();
// employer2.firstName = "Andriy";
// employer2.lastName = "Mriy";
// employer2.position = "developer";
// employer2.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(employer2);
// console.log(employer2.fullName());

// за допомогою шаблону blueprint

// function Employee(firstName, lastName, position) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.position = position;
//   this.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// let devPeterPeterson = new Employee("Peter", "Peterson", "dev");
// let testerJohnJonson = new Employee("John", "Johnson", "tester");

// //метод в обєкті hasOwnProperty

// let myObj = {
//   //creat an Object
//   myProperty: 1000,
//   myProperty2: function () {
//     console.log("Hello");
//   },
// };

// console.log(myObj.hasOwnProperty("myProperty"));
// console.log(myObj.hasOwnProperty("myProperty2"));
// console.log(myObj.hasOwnProperty("myProperty3"));

//Clasess basic syntax

// class Student {
//   constructor(name) {
//     this.name = name;
//   }
//   showName() {
//     alert(this.name);
//   }
// }

// let student = new Student("Sam");
// console.log(student.showName());

//unnamed Class Function

// let Foo = class {
//   constructor() {}
//   bar() {
//     return `Hello World!`;
//   }
// };

// let instance = new Foo();
// console.log(instance.bar()); //"Hello World!"
// console.log(Foo.name); // "Foo"

//named Class Function

// let Foo = class NamedFoo {
//   constructor() {}
//   WhoIsThere() {
//     return NamedFoo.name;
//   }
// };

// let bar = new Foo();
// console.log(bar.WhoIsThere()); //"NamedFoo"
// console.log(Foo.name); //"NamedFoo"
// console.log(NamedFoo.name); //ReferenceError NamedFoo is not defined

//Classes Statick Method  статичні методи класів

// class Book {
//   constructor(author) {
//     this.bookname = author;
//   }
//   static reedBook() {
//     return `You reading new book!`;
//   }
// }
// neewbook = new Book("Dumas");
// console.log(Book.reedBook()); //You reading new book!
// console.log(neewbook.reedBook()); //Eroor

// getters and setters

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       alert(`Name is too short!`);
//       return;
//     }
//     this._name = value;
//   }
// }
// let user = new User("Garry");
// alert(user.name);
// user = new User("Bob");
// user.name = "David";

// Classes inheritance  наслідування класів

// class Animal {
//   constructor(kind) {
//     this.kind = kind;
//   }
//   run() {
//     alert(`${this.kind} runs!`);
//   }
// }

// class Leopard extends Animal {
//   jump() {
//     alert(`${this.kind} jumps!`);
//   }
// }

// let leopard = new Leopard("Spotted Leopard");
// leopard.jump();
// leopard.run();

//classes keyword super Ключове слово супер

class Animal {
  constructor(kind, weight) {
    this.kind = kind;
    this.weight = weight;
  }
  run() {
    alert(`${this.kind} runs!`);
  }
}

class Leopard extends Animal {
  constructor(kind, weight, speed) {
    super(kind, weight);
    this.speed = speed;
  }
  jump() {
    alert(`${this.kind} jumps!`);
  }
}

let leopard = new Leopard("Spoted Leopard", 40, 60);
alert(leopard.weight);
alert(leopard.speed);
