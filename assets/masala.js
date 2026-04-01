// // // /// // // / // / / /16 OOP amaliyot
// const seriesDB = {
//   count: 0,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
//   start: function () {
//     seriesDB.count = +prompt("Nechta serial ko’rdingiz?", "");

//     while (
//       seriesDB.count == "" ||
//       seriesDB.count == null ||
//       isNaN(seriesDB.count)
//     ) {
//       seriesDB.count = +prompt("Nechta serial ko’rdingiz?", "");
//     }
//   },
//   setSeries: function () {
//     for (let i = 0; i < 2; i++) {
//       const a = prompt(`Oxirgi ko’rgan serialingiz ${i + 1}?`, "");
//       const b = prompt(`Nechi baxo berasiz? ${i + 1}`, "");

//       if (a !== null && b !== null && a !== "" && b !== "") {
//         seriesDB.series[a] = b;
//       } else {
//         i--;
//       }
//     }
//   },
//   detectingLevel: function () {
//     if (seriesDB.count < 5) {
//       console.log("Kam serial ko'ripsiz");
//     } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//       console.log("Siz classik tamoshabin ekansiz");
//     } else if (seriesDB.count >= 10) {
//       console.log("Siz serialchi zvezda ekansiz");
//     }
//   },
//   visibleDB: function () {
//     if (seriesDB.private) {
//       seriesDB.private = false;
//     } else {
//       seriesDB.private = true;
//     }
//   },
//   showDB: function () {
//     if (!seriesDB.private) {
//       console.log(seriesDB);
//     } else {
//       console.log("Ma'lumot mahfiy saqlanmoqda");
//     }
//   },
//   writeGenres: function () {
//     // for (let i = 0; i < 3; i++) {
//     // 	const genre = prompt(`Yaxshi ko'rgan janringiz ${i + 1}?`, '')
//     // 	if (genre === '' || genre === null) {
//     // 		i--
//     // 	} else {
//     // 		seriesDB.genres[i] = genre
//     // 	}
//     // }

//     let genres = prompt(
//       "Yaxshi ko'rgan janringizni vergul yordamida yozing!",
//       "",
//     );

//     while (genres == "" || genres == null) {
//       genres = prompt(
//         "Yaxshi ko'rgan janringizni vergul yordamida yozing!",
//         "",
//       );
//     }

//     if (genres) {
//       seriesDB.genres = genres.split(", ");
//       seriesDB.genres.sort();
//     }
//   },
// };

// 1
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const student = new User("John", 20);
// const student2 = new User("Cristian", 19);

// console.log(student);
// console.log(student2);

// // 2
// function Car(brand, year) {
//   this.brand = brand;
//   this.year = year;
// }

// Car.prototype.getInfo = function () {
//   return `${this.brand} ${this.year}`;
// };

// const toyota = new Car("Toyota", "2020");
// console.log(toyota.getInfo());

// 3
// function Student(name, grade) {
//   this.name = name;
//   this.grade = grade;

//   this.isPassed = function () {
//     if (this.grade >= 60) {
//       return "Passed";
//     } else {
//       return "Failed";
//     }
//   };
// }

// const student = new Student("Jonpo'lat", 90);
// student.isPassed();

// 4
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }
// Product.prototype.getDiscountPrice = function (percent) {
//   return this.price - (this.price * percent) / 100;
// };

// const phone = new Product("Iphone", 1000);
// console.log(phone.getDiscountPrice(10));

// 5
// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance = this.balance + amount;
//     console.log(
//       `Баланс был пополнен на: ${amount}, общий баланс: ${this.balance}`,
//     );
//   }

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance = this.balance - amount;
//       console.log(`Было снято: ${amount},  остаток: ${this.balance}`);
//     } else {
//       console.log(`Не хватает средства баланс: ${this.balance}`);
//     }
//   }
// }

// const myBank = new BankAccount("John", 1000);
// myBank.withdraw(900);

// function BankAccount(owner, balance) {
//   this.owner = owner;
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance = this.balance + amount;
//   console.log(
//     `Баланс был пополнен на: ${amount}, общий баланс: ${this.balance}`,
//   );
// };
// BankAccount.prototype.withdraw = function (amount) {
//   if (this.balance > amount) {
//     this.balance = this.balance - amount;
//     console.log(`Было снято: ${amount},  остаток: ${this.balance}`);
//   } else {
//     console.log(`Не хватает средства баланс: ${this.balance}`);
//   }
// };
// const myBank = new BankAccount("John", 1000);
// myBank.deposit(900);

// 6
// class Phone {
//   constructor(brand) {
//     this.brand = brand;
//     this.battery = 100;
//   }

//   use() {
//     if (this.battery >= 10) {
//       this.battery -= 10;
//     }
//     return this.battery;
//   }

//   charge() {
//     this.battery = 100;
//     return this.battery;
//   }
// }

// const iphone = new Phone("Iphone", 100);
