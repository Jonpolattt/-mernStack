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


