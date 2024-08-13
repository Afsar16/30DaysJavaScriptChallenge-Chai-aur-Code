// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    name = "afsar"
    age = 22;
    greet() {
        console.log(`your name is ${this.name} and age is ${this.age}`) //age is 22
    }
    // * Task 2: Add a method to ♂the Person class that updates the age property and logs the updated age.
    greetUpdate(updatedage) {
        this.age = updatedage;
        console.log(`your name is ${this.name} and age is ${this.age}`) //age is 23
    }
}
const p = new Person();
p.greet()
p.greetUpdate(25);

