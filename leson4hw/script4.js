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

//     this.arr = [];
//   }
//   set setExp(value) {
//     this.#experience = value;
//   }
//   get getExp() {
//     return this.#experience;
//   }

//   showSalary() {
//     return this.dayRate * this.workingDays;
//   }
//   showSalaryWithExperience() {
//     return this.dayRate * this.workingDays * this.#experience;
//   }
// }

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.getExp);
// console.log("John Johnson salary: " + worker1.showSalaryWithExperience());
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.getExp);
// console.log("John Johnson salary: " + worker1.showSalaryWithExperience());

// let worker2 = new Worker("Tom Tomson", 48, 22);
// worker2.setExp = 2.5;
// let worker3 = new Worker("Andy Ander", 29, 23);
// worker3.setExp = 5;

// let arr = [];
// arr.push(worker1, worker2, worker3);

// arr.sort(function(a, b) {
//   return b.getExp - a.getExp;
// });

// console.log(arr)  // виведе відсортований масив

// arr.forEach(function(elem) {
//   console.log(elem.fullName + ": " + elem.showSalary());
// });

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

class GeoFigure {
  getArea() {
    return 0;
  }

  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeoFigure {
  constructor(a, h) {
    super();
    this.a = a;
    this.h = h;
  }

  getArea = function() {
    return (this.a * this.h) / 2;
  };
}

class Circle extends GeoFigure {
  constructor(r) {
    super();
    this.r = r;
  }
}

class Square extends GeoFigure {
  constructor(x) {
    super();
    this.x = x;
  }
}

Circle.prototype.getArea = function() {
  return Math.PI * Math.pow(this.r, 2);
};

Square.prototype.getArea = function() {
  return Math.pow(this.x, 2);
};

const figures = [new Triangle(4, 5), new Circle(5), new Square(7)];
const logFigures = arr => arr.map(item => console.log(item, item.getArea()));

function handleFigures(arr) {
  return arr.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue.getArea();
  }, 0);
}

logFigures(figures);
console.log(handleFigures(figures));
