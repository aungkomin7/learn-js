// function findAge(birthYear) {
//     let currentYear = 2025;
//     let age = currentYear - birthYear;
//     return age;
// }

// console.log(findAge(1992));
// console.log(findAge(1997));
// console.log(findAge(1994));
// console.log(findAge(2000));

// let total = 0;
// function buy(productName, productPrice, quantity) {
//   let cost = productPrice * quantity;
//   total += cost;
//   return productName + "-" + quantity + "-" + cost;
// }

// function findTax(amount, percentage) {
//   return amount * (percentage / 100);
// }

// console.log(buy("apple", 1000, 5));
// console.log(buy("banana", 500, 5));
// console.log(buy("mango", 200, 3));

// console.log("---------------------");

// console.log("Total" + "-" + total);

// let tax = findTax(total, 5);

// console.log(`Tax - ${tax}`);

// console.log("---------------------");

// let netTotal = tax + total;
// console.log("Cash -" + netTotal);

// if (netTotal > 8500) {
//   console.log("you got lucky draw");
// }

// function findEvenOdd(number) {
//   let remainder = number % 2;
//   if ((remainder == 1)) {
//     return "Odd";
//   } else {
//     return "Even";
//   }
// }

// console.log(findEvenOdd(10));
// console.log(findEvenOdd(11));
// console.log(findEvenOdd(12));
// console.log(findEvenOdd(13));

// let result = "Overall Passed";
// function findPassOrFail(mark) {
//   if (mark >= 40) {
//     return "Passed";
//   } else {
//     result = "Overall Failed";
//     return "failed";
//   }
// }

// console.log(findPassOrFail(30));
// console.log(findPassOrFail(40));
// console.log(findPassOrFail(50));
// console.log(findPassOrFail(60));
// console.log(findPassOrFail(70));
// console.log(findPassOrFail(80));
// console.log(result);

// let marks = [30, 40, 50, 60, 70, 80];

// let markObj = {
//   mm: 30,
//   eng: 40,
//   math: 50,
//   che: 60,
//   phy: 70,
//   bio: 80,
// };

// let studentMark = [
//   {
//     id: 1,
//     subject: "myanmar",
//     short: "mm",
//     mark: 40,
//   },
//   {
//     id: 2,
//     subject: "english",
//     short: "eng",
//     mark: 30,
//   },
//   {
//     id: 3,
//     subject: "mathematics",
//     short: "math",
//     mark: 50,
//   },
//   {
//     id: 4,
//     subject: "chemistry",
//     short: "che",
//     mark: 60,
//   },
//   {
//     id: 5,
//     subject: "physics",
//     short: "phy",
//     mark: 70,
//   },
//   {
//     id: 6,
//     subject: "biology",
//     short: "bio",
//     mark: 80,
//   },
// ];

// for (const i of marks) {
//   console.log(i, findPassOrFail(i));
// }

// for (const i in markObj) {
//   console.log(i, markObj[i], findPassOrFail(markObj[i]));
// }

// for (const i of studentMark) {
//     console.log(i,i.mark, findPassOrFail(i.mark));
// }

// template string

// let myName = "aung ko min";

// console.log(`My name's ${myName}`);

// let poem = `Roses are red,
// Violets are blue,
// JavaScript is awesome,
// And so are you!`;

// console.log(poem);

// let hexNum = 0x1A;
// console.log(hexNum);

// console.log(hexNum / 2);

// let fruits = ["apple", "banana", "cherry"];

// fruits[1] = "mango"; // change "banana" to "mango"
// fruits[5] = "mango"; // change "banana" to "mango"

// console.log(fruits); // ["apple", "mango", "cherry"]

// console.log(fruits.length);

// let person = {

// };

// let x = "age";

// person.name = "James";
// person["age"] = 7;

// console.log(person.name);
// console.log(person[x]);
// console.log(person);


