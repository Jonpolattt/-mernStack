// Ozgaruvchilar

// let aga = 22;
// const age = 22;

// console.log(a); // undefined
// var a = 22
// var a = 22

// {
// // var a = 22
// }

// 4 dars Malumot turlari

// Primitive
// const age = 23;
// console.log(typeof age); // Number

// const name = "Jonpo'lat";
// console.log(typeof name); // String

// const bolean = true;
// console.log(typeof bolean); // boolean

// let a;
// console.log(a); // undefind

// let nol = null;
// console.log(nol); // null

// let id = Symbol(121212121);
// console.log(id); // Symbol

// let qol = BigInt(190489489012477124792184793120472104899991209);
// console.log(qol); // BigInt

// // Object

// const person = {
//   name: "jonpolat",
//   age: "19",
//   hobby: {
//     sport: "Play chess",
//   },
// };

// // Array

// const colors = ["black", 22, true, {}]

// 5 dars

// alert("Jonpolat + Ttthmn")

// const isAccess = confirm("Are you above 18 age")
// console.log(isAccess);

// let name = prompt("What is your name","")
// console.log(typeof name );

// let age = +prompt("How old are you","")
// console.log(typeof age);

// const firtsName = "Fayzullans"
// const lastName = "Ochilov"
// const age = 22

// console.log(`My full name is ${firtsName} ${lastName}, I'm ${age}`);

// let x = 6
// let y = 3

// // Postfix
// x++
// y--

// // Prefix
// ++x
// --y

// console.log(x);
// console.log(y);

// const isMarried = true
// const isHaveChildren = false

// const isFamaliy = isMarried || isHaveChildren

// console.log(isFamaliy);

// Shartli operator

// const trafficLight = "red";

// if (trafficLight == "red") {
//   console.log("Stop!");
// } else if (trafficLight == "yellow") {
//   console.log("Tayorlan");
// } else if (trafficLight == "green") {
//   console.log("gooooo");
// }

// const age = +prompt("How old are you?", "");
// if (age < 18) {
//   console.log("not accuses");
// } else {
//   console.log("Munkun");
// }

// const age = 18;

// age < 18 ? console.log("Kirovir") : console.log("San xali kichkina san ");

// switch (trafficLight) {
//   case "green":
//     console.log("Goooo");
//     break;
//   case "yellow":
//     console.log("tayorlaning");
//     break;
//   case "red":
//     console.log("Stopppppp!");
//     break;
//   default:
//     console.log("Uyoq buyoqa qarab utip ketovir");

//     break;
// }

// // // // // // // // // // // // Tsikil
// let number = 1;

// while (number <= 5) {
//     console.log(number);
//     number++
// }

// do {
//     console.log(number);
//     number++
// } while (number <= 5)

// for (number; number <= 5; number++) {
//   if (number === 2) {
//     // break
//     continue;
//   }
// }

// Function turlari

// declaration
// function showHelloWorld (name) {
//     console.log(`Hello world ${name}`);
// }

// showHelloWorld("Jonpolat")

// const calcAdd18 = calculate(1, 8);
// const calcAdd20 = calculate(1, 8);

// console.log(calcAdd18 + 18);
// console.log(calcAdd18 + 20);

// function calculate(a, b) {
//   return a + b;
// }

// const showHellowWorld = function (text) {
//   console.log(text);
// };

// showHellowWorld("Hello world");

// const calculate = function (a, b) {
//   return a + b;
// };
// console.log(calculate(10,11));

// Methodlar
// const text = "Hello wordl";
// const password = "      Jonpo'lat       "

// console.log(`Uzunligi ${text.length}`);

// console.log(`1#. Aniq possitsiyadagi indexdagi xarf ${text.charAt(1)}`);
// console.log(
//   `2#. Aniq possitsiyadagi indexdagi xarfni kodi ${text.charCodeAt(1)}`,
// );
// console.log((text[1] = "A"));
// console.log(`Textni katta xarifga utkazish ${text.toLocaleUpperCase()}`);
// console.log(`Textni kichkina xarifga utkazish ${text.toLowerCase()}`);
// console.log(`1#. Matindi Kesich: ${text.slice(0, 4)}`);
// console.log(`2#. Matindi Kesich: ${text.substring(0, 4)}`);
// console.log(`Ikki tarafdan bo'sh space olib tashlash: ${password.trim()}`);
// console.log(`Boshidan bo'sh space olib tashlash: ${password.trimStart()}`);
// console.log(`Oxiridan bo'sh space olib tashlash: ${password.trimEnd()}`);

// 12 dars Callback va Objectlar destruktizasiya

// function greeting(callback) {
//   console.log("Hello world!");
//   callback();
// }

// greeting(function ()  { // or ()=>
//   console.log("Are you ready today");
// });

// function greeting(callback) {
//   console.log("Hello world!");
//   callback();
// }

// function callback() {
//   console.log("Are you ready today");
// }
// greeting(callback)

// const person = {
//   name: "Jonpolat",
//   year: 2007,
//   job: "fronted developer",
//   hobbies: {
//     sprort: "boxing",
//     games: "chess",
//   },
//   sayHello: function () {
//     console.log(`Hello ${this.name}`);

//   }
// };

// const {year, job, name, sayHello, hobbies: {games, sprort}} = person

// console.log(Object.keys(person).length)

// for in faqat object uchun
// for (let key in person) {
//   if (typeof person[key] === "object") {
//     for (let i in person[key]) {
//       console.log(`Property: ${i}, Value: ${person[key][i]}`);
//     }
//   } else {
//     console.log(`Property: ${key}, Value: ${person[key]}`);
//   }
// }

// Massivlar

// const colors = ["red", "blue", "black", "yellow", "green"];
// console.log("Massiv uzunligi:", colors.length);
// console.log(`Index yordamida element olish: ${colors[2]}`);

// // Pop - arrayni oxirigi elementini ochiradi
// console.log("Massivdi oxirigi elemtini ochirish" + colors.pop());

// // Push - arrayni oxiriga yangi element qoshadi
// console.log("Massivdi oxiriga yangi element qoshadi" + colors.push("brown"));

// // Shift - arrayni boshidan element ochirish
// console.log(`Oldidagi elementi ochirish: ${colors.shift()}`);

// // UnShift - arrayni boshiga yangi element qoshadi
// console.log(`Arrayni oldiga yangi element qoshish: ${colors.unshift("gray")}`);

// console.log(colors);

// const cars = ["merc", "bmw", "audi", "suzuki", "subaro"];
// // Itteratsiya
// // for (let i = 0; i < cars.length; i++) {
// //   console.log(cars[i]);
// // }

// // // for of
// // for (let car of cars) {
// //     console.log(car);
// // }

// // For each
// // cars.forEach((item, idnex, arr) => {
// //     console.log(`${idnex}: ${item} in array ${arr}`);
// // })

// // Split
// const socialMedia = "Youtube, Telegram, Instagram";
// const arr = socialMedia.split(", ");
// // Join
// const text = arr.join("-");
// console.log(text);

// // Sort method - arrayni sartirovka qilib beradi, elementni faqat birinchi harifini oladi va string korinishida tekshiradi
// cars.sort();
// console.log(cars);

// const n = [23, 78, 12, 43, 56, 5];
// n.sort(compareNum);

// function compareNum(a, b) {
//   return a - b;
// }

// console.log(n);

// 14 dars

// Primitiv
// let a = 10,
//   b = a;

// b = b + 10;

// console.log(a);
// console.log(b);

// // Object

// const person = {
//   name: "Jonpolat",
//   age: 18,
//   hobbies: {
//     game: "Ufc",
//     sport: "football",
//   },
// };

// const secondPerson = person

// secondPerson.name = "Tahmina" // birinchi obeject xam uzgaradi bunaqa clonslash xato
// secondPerson.age = 17;

// console.log(person);
// console.log(secondPerson);

// #1. Iteratsiya (for in) Yuzaki clonlash
// const copyObj = (obj) => {
//   const clone = {};

//   for (let key in obj) {
//     clone[key] = obj[key];
//   }

//   return clone
// };

// const secondPerson = copyObj(person);

// secondPerson.name = "Tahmina";
// secondPerson.age = 17;

// console.log(person);
// console.log(secondPerson);

// #2. Object assign
// const secondPerson = Object.assign({isLoveMe: true}, person);

// secondPerson.name = "Tahmina";
// secondPerson.age = 17;

// console.log(person);
// console.log(secondPerson);

// // // // // // // // // // // // #3. Srpead Operatori ES8
// const secondPerson = {...person}

// secondPerson.name = "Tahmina";
// secondPerson.age = 17;

// console.log(person);
// console.log(secondPerson);

// Array clonlash

// #1 Slice method yordamida
// const cars = ["audi", "bmw", "porshe", "hyundai"];
// const clone = cars.splice();
// clone.push("Merc");

// console.log(cars);
// console.log(clone);

// // #2 Spread
// const copy = [...cars];
// console.log(copy);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const arr = [10, 20, 30];

// log(...arr); // 10, 20, 30

// // // // // // // //  OOP asoslari
// const suvCars = {
//   weight: 1000,
//   lenght: 3,
//   speed: () => {
//     console.log("100km/h");
//   },
// };

// const nexia = Object.create(suvCars)
// const matiz = Object.create(suvCars)

// // nexia.__proto__ = suvCars // eski ususli

// Object.setPrototypeOf(nexia, suvCars)

// // // // // // // // // // // // // // Dom bilan ishlash
const box = document.querySelector("#box"),
  buttons = document.querySelectorAll("button"),
  circle = document.getElementsByClassName("circle");

// console.log(buttons);
// console.log(circle);

// // for (let i = 0; i < circle.length; i++) {
// //   circle[i].style.backgroundColor = "black";
// // }

// // buttons.forEach((item) => {
// //     item.style.backgroundColor = 'green'
// // })

// // box.style.backgroundColor = "red"

// // const div = document.createElement("div");
// div.classList.add("heart");
// div.style.backgroundColor = "black";
// document.querySelector(".wrapper").append(div); // boshiga qushadi
// document.querySelector(".wrapper").prepend(div); // oxiriga qushadi

// circle[0].remove();

// const div = document.createElement("div");
// div.style.width = "400px";
// div.style.height = "200px";
// div.style.color = "white";
// div.style.backgroundColor = "black";

// div.innerHTML = `<h1>Hello World</h1>`
// div.textContent = "Hello world" // faqat text bilan ishledi
// div.insertAdjacentHTML("afterend", "<h1>Hello Fayzula</h1>")
// document.querySelector('body').append(div)