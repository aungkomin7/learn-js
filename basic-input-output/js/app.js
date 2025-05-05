// console.dir(window);
// console.dir(console);
// console.dir(document);

// let x = window.prompt("first number");
// let y = window.prompt("second number");

// let z  = parseFloat(x) + parseFloat(y);

// window.alert(`your result is ${z}`)

// const age = window.prompt("enter your age");
// const result = 2025 - parseInt(age);

// window.alert(`you was born in ${result}`)

// const x = window.confirm("have you had your dinner?");
// console.log(x ? "yes I have" : "No I haven't");

// console.log(window);

// console.log(document);

// const heading = document.getElementById("heading");
// const textInput = document.getElementById("textInput");
// // const btn = document.getElementById("btn");

// console.dir(heading);
// console.log(textInput);

// console.log(heading.innerText);
// console.log(heading.innerHTML);

// const listGroup = document.getElementById("list-group");

// console.log(listGroup);
// console.log(listGroup.innerHTML);
// console.log(listGroup.innerText);

// const heading = document.getElementById("heading");
// const textInput = document.getElementById("textInput");
// const btn = document.getElementById("btn");
// const listGroup = document.getElementById("list-group");

// console.dir(heading);

// console.dir(listGroup);

// console.log(listGroup.innerHTML);
// console.log(listGroup.innerText);

// heading.innerText = "akm"
// console.log(heading.innerText);

// btn.ondblclick= changeTitle;
// btn.addEventListener("click",changeTitle);   //must use

// const p = document.getElementsByTagName("p");

// console.log(p);
// console.log(p[0]);

// const list = document.getElementsByClassName("list");
// console.dir(list);
// console.dir(list[0].innerHTML);
// console.dir(list[1].innerText);

// console.dir(heading);

// const p = document.querySelectorAll("p");            //tag
// const list = document.querySelectorAll(".list");     //class
// const heading = document.querySelector("#heading");

// console.log(p);                      //nodelists
// console.log(list)
// console.log(heading);
// console.log(heading.innerText);

// console.log(document.querySelector(".list").innerText);

const heading = document.querySelector("#heading");
const btn = document.querySelector("#btn");
const largeBtn = document.querySelector("#largebtn");
const smallBtn = document.querySelector("#smallbtn");
// console.dir(heading);
// // console.log(heading.style.color);
// heading.style.color = "green"
// console.log(heading);
// console.log(heading.style);
// console.log(heading.style.color);
// console.log(heading.style.textAlign);

// btn.onclick = () => {
//      heading.style.color = "green";
// }

console.dir(heading);
// heading.style.color = "green";
// heading.style.textAlign = "right"
// heading.style.backgroundColor = "black";
// heading.style.padding = "30px";

// heading[0].style.backgroundColor = "black"

// btn.onclick = () => {
//   heading.style.color = "blue";
//   heading.style.backgroundColor = "gray";
// };

// // console.log(heading.style.fontSize);
// largeBtn.onclick = () => {
//     const current = parseInt(heading.style.fontSize);
//     heading.style.fontSize = `${current + 5}px `;
//     console.log(heading.style.fontSize);
// };

// smallBtn.onclick = () => {
//   const current = parseInt(heading.style.fontSize);
//   heading.style.fontSize = `${current - 5}px `;
// };

console.log(heading.className);
console.log(heading.classList);

heading.classList.add("aaa","bbb")
heading.classList.remove("aaa")

heading.classList.replace("san","hi")

// heading.classList.toggle("zzz")
// heading.classList.toggle("zzz")
console.log(heading.classList);
