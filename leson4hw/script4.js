//task № 1

// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development"
// };

// function propsCount(currentObject) {
//   let i = 0;

//   for (let key in currentObject) {
//     i++;
//   }

//   alert("the number of properties of this object " + i);
// }

//task № 2

// let Andriy = {
//   age: 28,
//   course: "JS fundamental",
//   direction: "web-development",
//   duration: 3,
//   location: "SoftServ"
// };

// function showProps(obj) {
//   for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);

//     // виводить властивість і значення
//     // console.log(key + ": " + obj[key]);
//   }
// }

// // task № 3

// class Worker {
//   //privete property
//   #experience = 1.2;

//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//   }

//   set setExp(value) {
//     this.#experience = value;
//   }
//   get getExp() {
//     return this.#experience;
//   }

//   showSalary() {
//     return console.log(`${(this.fullName)} salary: ${this.dayRate * this.workingDays}`);
//   }

//   showSalaryWithExperience() {
//     return console.log(this.fullName + " salary: " + this.dayRate * this.workingDays * this.#experience);
//   }

//   salaryWithExperience() {
//     return this.dayRate * this.workingDays * this.#experience;
//   }



// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("experience: " + worker1.getExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.getExp);
// worker1.showSalaryWithExperience();

// console.log("____________________________________________");
// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("experience: " + worker2.getExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.getExp);
// worker2.showSalaryWithExperience();
// console.log("____________________________________________");
// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("experience: " + worker3.getExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.getExp);
// worker3.showSalaryWithExperience();
// console.log("____________________________________________");

// // добавив в масив кожного працівника
// let arrWorkers = [worker1.fullName, worker1.salaryWithExperience(),
// worker2.fullName, worker2.salaryWithExperience(),
// worker3.fullName, worker3.salaryWithExperience()];


// for (let i = 1; i < arrWorkers.length - 1; i = i + 2) {
//   for (let j = 1; j < arrWorkers.length - 1; j = j + 2) {
//     if (arrWorkers[j] > arrWorkers[j + 2]) {
//       tmp = arrWorkers[j];
//       arrWorkers[j] = arrWorkers[j + 2];
//       arrWorkers[j + 2] = tmp;
//     }
//   }
// }

// for (i = 0; i < arrWorkers.length - 1; i = i + 2) {
//   console.log(arrWorkers[i] + ":" + arrWorkers[i + 1]);
// }




//task № 4

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   showFullName() {
//     return this.name + " " + this.surname;
//   }
// }

// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }
//   setMidleName(midleName) {
//     this.midleName = midleName;
//   }

//   showFullName() {
//     return `${this.surname} ${this.name} ${this.midleName}`;
//   }

//   showCourse() {
//     return new Date().getFullYear() - this.year;
//   }
// }
// var stud1 = new Student("Petro", "Petrenko", 2015);
// stud1.setMidleName("Petrovych");
// console.log(stud1.showFullName());
// console.log("Current course: " + stud1.showCourse());

//task № 5

// class GeoFigure {
//   getArea() {
//     return 0;
//   }

//   toString() {
//     return Object.getPrototypeOf(this).constructor.name;
//   }
// }

// class Triangle extends GeoFigure {
//   constructor(a, h) {
//     super();
//     this.a = a;
//     this.h = h;
//   }
// }

// class Circle extends GeoFigure {
//   constructor(r) {
//     super();
//     this.r = r;
//   }
// }

// class Square extends GeoFigure {
//   constructor(x) {
//     super();
//     this.x = x;
//   }
// }

// Triangle.prototype.getArea = function () {
//   return (this.a * this.h) / 2;
// };

// Circle.prototype.getArea = function () {
//   return Math.PI * Math.pow(this.r, 2);
// };

// Square.prototype.getArea = function () {
//   return Math.pow(this.x, 2);
// };

// const figures = [new Triangle(4, 5), new Circle(5), new Square(7)];


// function handleFigures(figures) {
//   return figures.reduce(function (sum, figures) {
//     if (figures instanceof GeoFigure) {
//       console.log(`Geometrick figure: ${figures.toString()} -area ${(figures.getArea())}`)
//     }
//     return sum + figures.getArea()
//   }, 0)
// }

// console.log(handleFigures(figures))
