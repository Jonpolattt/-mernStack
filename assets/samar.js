// OOP MODULI

// 15 OOP
// class Car {
//   constructor(color, brand, maxSpeed) {
//     color = this.color;
//     brand = this.brand;
//     maxSpeed = this.maxSpeed;
//   }

//   speed() {
//     console.log("Joha");
//   }
// }

// #16. Js OOP
const person = {
  name: "Jonpo'lat",
  introduce() {
    console.log(`My name is ${this.name}`);
  },
};

console.log(person);
console.log(person.toString());

// # Prototype ni 3 xil yaaratish ulsuli:

// #1 Consturctor Function
const Car = function (brand, color) {};

// #2 ES6 Classes
class Car2 {
  constructor(color, brand, maxSpeed) {
    this.color = color;
    this.brand = brand;
    this.maxSpeed = maxSpeed;
  }
}

// #3 Object create

const CarProte = {
  init(brand, color) {
    this.color = color;
    this.brand = brand;
  },
};

const porshe = Object.create(CarProte);
porshe.init("porshe", "black");
