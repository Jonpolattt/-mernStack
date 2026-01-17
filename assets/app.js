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

// alert("Hello world")

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




// // // // // // /// //// //// 6 DARS MASALA // /// // /// // // /// /// // / // 

const numberOfSeries = +prompt("Nechta seria kordingiz?", "");

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    geners: [],
    privat: false,
};

const lastMovie = prompt("Oxirgi korgan serialingiz?", "")
const raiting = prompt("Nechi baho berasiz?", "")

seriesDB.series[lastMovie] = raiting

 
console.log(seriesDB);
