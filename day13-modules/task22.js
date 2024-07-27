// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.


// const obj = {
//     name: 'afsar',
//     age: 22,
//     gender: 'male'
// }

// module.exports = obj;

// personModule.js
const person = {
    name: 'John Doe',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    haveBirthday() {
      this.age += 1;
      console.log(`Happy Birthday! I am now ${this.age} years old.`);
    }
  };
  
  module.exports = person;
  