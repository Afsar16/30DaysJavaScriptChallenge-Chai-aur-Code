// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 

let name = "Alice";
let age = 25;

let person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person);
person.greet();


// Task 9: Create an object with computed property names based on variables and log the object to the console.

let prop1 = "firstName";
let prop2 = "lastName";

let user = {
    [prop1]: "John",
    [prop2]: "Doe",
    age: 30
};

console.log(user);

