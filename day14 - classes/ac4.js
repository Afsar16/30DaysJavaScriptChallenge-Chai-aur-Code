// Activity 4: Getters and Setters
// * Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.



// class Person {
//     // Properties
//     firstName = "Afsar";
//     lastName = "M";
//     age = 22;

//     // Getter method to return the full name
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     greet() {
//         console.log(`Your name is ${this.firstName} ${this.lastName} and your age is ${this.age}.`);
//     }

//     greetUpdate(newAge) {
//         this.age = newAge;
//         console.log(`Your name is ${this.firstName} ${this.lastName} and your age is ${this.age}.`);
//     }

//     // Static method returning a generic greeting message
//     static genericGreet() {
//         return "Hello! This is a generic greeting from the Person class.";
//     }
// }

// Task 7: Create an instance and log the full name using the getter
// const person1 = new Person();
// console.log(person.fullName); // Logs: Afsar Ahmad

// * Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

class Person {
    // Properties
    firstName = "Afsar";
    lastName = "M";
    age = 22;

    // Getter method to return the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter method to update the firstName and lastName
    set fullName(name) {
        const [firstName, lastName] = name.split(" "); // array destructuring
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        console.log(`Your name is ${this.firstName} ${this.lastName} and your age is ${this.age}.`);
    }

    greetUpdate(newAge) {
        this.age = newAge;
        console.log(`Your name is ${this.firstName} ${this.lastName} and your age is ${this.age}.`);
    }

    // Static method returning a generic greeting message
    static genericGreet() {
        return "Hello! This is a generic greeting from the Person class.";
    }
}

// Task 8: Update the name using the setter and log the updated full name
const person = new Person();
console.log(person.fullName); // Logs: Afsar Ahmad

person.fullName = "affu m"; // Updates the firstName and lastName using the setter
console.log(person.fullName); // Logs: John Doe

