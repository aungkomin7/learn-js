// function fun() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// fun();

// if(true){
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// continue skip
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
//   if (i === 2 || i === 4) continue;
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// console.log(i);

// for (
//   let i = (function () {
//     console.log("first statement");
//     return 1;
//   })();
//   (function () {
//     const condition = i <= 5;
//     console.log("second statement", condition);
//     return condition;
//   })();
//   (function () {
//     i = i + 1;
//     console.log("third statement", i);
//     return i;
//   })()
// ) {
//   console.log(i, "code block loop");
// }

// let double = (function (num) {
//   let result = num * 2;
//   return result;
// })(10);

// console.log(double);

let fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Strawberry",
  "Grapes",
  "Watermelon",
  "Papaya",
  "Kiwi",
];

// for (let el of fruits) {
//   console.log(el);
// }

// let person = {
//   name: "Thomas",
//   age: 25,
//   country: "USA",
//   color: "Blue",
// };

// for (let key in person) {
//     console.log(key,person[key]);
// }

//  const students = [
//    { id: 1, name: "Thomas", age: 25, country: "USA" },
//    { id: 2, name: "Sara", age: 22, country: "Canada" },
//    { id: 3, name: "Ali", age: 30, country: "UAE" },
//    { id: 4, name: "Emma", age: 27, country: "UK" },
//    { id: 5, name: "John", age: 35, country: "Australia" },
//  ]
//  // console.log(students)
//  // for (let student of students) {
//  //   console.log(student.id, student.name, student.country);
//  // 
//  for (let student of students) {
//    for (let key in student) {
//      console.log(key, student[key]);
//    }  console.log("=========");
//  }


