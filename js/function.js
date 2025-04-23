// function expressions

// const fun = (x,y) => x + y;

// console.log(fun(1,2));

// (() => {
//   console.log(IIFE);
// })();

// const x = () => {
//   return "This is x ";
// };

// const y = () => {
//   return x() + "this is y";
// };

// console.log(x());
// console.log(y());

// let global = "global";

// function outer() {
//   let outer = "outer";

//   function inner() {
//     let inner = "inner";
//     console.log(global, outer, inner);
//   }

//   inner();
// }

// outer();

// fun();

// function fun() {
//     console.log("hello world");
// }

// const arr = [];
// let idx = 0;
// const area = (width, height) => {
//   let result = width * height;
//   arr[idx++] = { width, height, area: result };
//   return `${result} sqft`;
// };

// console.log(area(10, 20));
// console.log(area(10, 30));
// console.log(area(10, 40));

// console.log(arr);

// const rates = {
//   usd: 2100,
//   eur: 2300,
//   sgd: 1500,
// };

// const exchangeToMMK = (amount, currency) => {
//   let currentRate = rates[currency];
//   let result = amount * currentRate;
//   return result;
// };

// console.log(exchangeToMMK(200, "usd"));

// const exchangeFromMMK = (amount, currency) => {
//   let currentRate = rates[currency];
//   let result = amount / currentRate;
//   return result;
// };

// age = currentyear - birthyear;

// const findAge = (birthYear) => {
//   let currentYear = 2025;
//   let result = currentYear - birthYear;
//   return `Your age is ${result}.`;
// };

// console.log(findAge(1997));
// console.log(findAge(1992));
// console.log(findAge(1994));

// const rates = {
//   usd: 2100,
//   eur: 2300,
// };

// const exchangeToMMK = (amount, currency) => {
//   let currentRate = rates[currency];
//   let result = amount * currentRate;
//   return `${result} MMK`;
// };

// console.log(exchangeToMMK(200, "eur"));

// const exchangeFromMMK = (amount, currency) => {
//   let currentRate = rates[currency];
//   let result = amount / currentRate;
//   return `${result} ${currency}`;
// };

// console.log(exchangeFromMMK(460000,"eur"));

// const obj = {
//   a: "aaa",
//   b: "bbb",
//   c: 15,
//   fun: function () {
//     return "fun method";
//   },
//   run() {
//     return `run method ${this.a}, ${this.b} , ${this.fun()}`;
//   },
// };

// console.log(obj.a);
// console.log(obj.fun());
// console.log(obj.run());

// const rates = {
//   usd: 2100,
//   eur: 2300,
//   sgd: 1800,
// };

// const exchangetoMMK = (amount, currency) => {
//   let currentRate = rates[currency];
//   let result = amount * currentRate;
//   return `${result} ${currency}`;
// };

// console.log(exchangetoMMK(200, "usd"));
// console.log(exchangetoMMK(200, "eur"));
// console.log(exchangetoMMK(200, "sgd"));

// const exchangeFromMMK = (amount, currency) => {
//   let currentRate = rates[currency];
//   let result = amount / currentRate;
//   return `${result} MMK`;
// };

// console.log(exchangeFromMMK(420000, "usd"));
// console.log(exchangeFromMMK(460000, "eur"));
// console.log(exchangeFromMMK(360000, "sgd"));

// console.log(x);
// var x = 100;

// console.log(fun());
// const fun = () => {
//   return "hello world";
// };

// console.log(fun());

// function fun() {
//   return "hello world";
// }

// const fun = (x,y) => {
// //   console.log("hello world");
// return x +y;
// console.log("hello");
// };

// console.log(fun(1,2));

// const obj = {
//   a: "aaa",
//   b: "bbb",
//   fun: function () {
//     return `this is fun method`;
//   },
//   run() {
//     return `this is run method ${this.fun()} ${this.a}`;
//   },
// };

// console.log(obj.fun());
// console.log(obj.run());

// console.log(obj);

// console.log(console);

// ((x) => {
//   console.log("IIFE" + x);
// })("apple");

// const arr = [];
// let idx = 0;

// const area = (width, height) => {
//   let result = width * height;
//   arr[idx++] = { width, height, area: result };
//   return `${result} sqft`;
// };

// console.log(area(10, 20));
// console.log(area(10, 30));
// console.log(area(10, 40));
// console.table(arr);

// let x = 10 + "sqft";
// console.log(typeof x);

// const evenOdd = (num) => {
//   let remainder = num % 2;
//   if (remainder === 0) {
//     return `Even`;
//   } else {
//     return `Odd`;
//   }
// };

// console.log(evenOdd(10));
// console.log(evenOdd(11));
// console.log(evenOdd(12));
// console.log(evenOdd(13));
// let luckydraw = "you got a lucky draw";
// let total = 0;
// const buy = (itemName, quantity, price) => {
//   let cost = price * quantity;
//   total += cost;
//   if (total > 10000) {
//     return luckydraw;
//   }
//   return `${itemName} - ${quantity} - ${price}`;
// };

// const findTax = (amount, percentage) => {
//   let result = amount * (percentage / 100);
//   return result;
// };

// console.log(buy("apple", 5, 1000));
// console.log(buy("banana", 10, 500));
// console.log(buy("mango", 20, 200));

// console.log(`Total - ${total} MMK`);

// let tax = findTax(total, 5);
// console.log(`Tax - ${tax} MMK`);

// let netTotal = total + tax;
// console.log(`Net Total - ${netTotal} MMK`);

// console.log(luckydraw);

// const marks = [30, 40, 50, 60, 70, 80];

// let result = "all passed";
// const passFail = (mark) => {
//   if (mark >= 40) {
//     return `Passed`;
//   } else {
//     result = "all failed";
//     return `Failed`;
//   }
// };

// for (const el of marks) {
//   console.log(el, passFail(el));
// }

// console.log(result);

// stack and heap memory in js data structure
// let x = [1,2,3];
// let y = x;

// x[0] = 111;

// console.log(y);

// let x = ["a", "b", "c"];
// let y = x;

// x = ["d", "e", "f"];
// console.log(y);


