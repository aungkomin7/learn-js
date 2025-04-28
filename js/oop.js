// const car = {
//   make: "Toyota",
//   mode: "corolla",
//   year: 1990,
// };

// console.log(car);

// class Car {
//   make = "Toyota";
//   mode = "corolla";
//   year = 1990;

//   constructor(a,b){
//     console.log("this is constructor",a,b);
//   }
// }

// const x = new Car("aaa","bbb");

// console.log(x);

//real world practice

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   drive() {
//     return `${this.model} can drive`;
//   }
// }

// const x = new Car("toyota", "corolla", 1997);
// console.log(x);
// console.log(x.drive());

// const y = new Car("mazda", "ch5", 1997);
// console.log(y);

// const z = new Car("nissan", "GtR", 1997);
// console.log(z);

// class Car {
//   static a = "aaa";
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }
//   static run() {
//     return `${this.model} can drive.`;
//   }
// }

// // console.log(Car.run());

// const car1 = new Car("Toyota", "Corolla");
// console.log(car1);

// const date = new Date();
// console.dir(date);

// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(Date.now());

// console.log(Math.pow(2,3));

// console.dir(Date.now());

// class Person {
//   constructor(name, age, skinColor) {
//     this.name = name;
//     this.age = age;
//     this.skinColor = skinColor;
//   }
// }

// const personOne = new Person("James", 18, "white");
// console.log(personOne);

// class Student extends Person {
//   constructor(name, age, skinColor, uniMajor, city) {
//     super(name, age, skinColor);
//     this.uniMajor = uniMajor;
//     this.city = city;
//   }
// }

// const st1 = new Student("Mary",29,"black","EYU", "Yangon");

// console.table(st1);
