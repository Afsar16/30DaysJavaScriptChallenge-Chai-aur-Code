// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message. 

class Person {
    name = "Afsar";
    age = 22;

    greet() {
        console.log(`Your name is ${this.name} and your age is ${this.age}.`);
    }

    greetUpdate(newAge) {
        this.age = newAge;
        console.log(`Your name is ${this.name} and your age is ${this.age}.`);
    }

    // Task 5: Static method returning a generic greeting message
    static genericGreet() {
        return "Hello! This is a generic greeting from the Person class.";
    }
}

// Calling the static method without creating an instance
console.log(Person.genericGreet()); // Logs: Hello! This is a generic greeting from the Person class.


// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Student extends Person {
    studentId = "S12345";

    // Task 6: Static property to keep track of the number of students
    static studentCount = 0;

    constructor() {
        super(); // Calls the constructor of the Person class
        Student.studentCount++; // Increment the static property whenever a new Student is created
    }

    getStudentId() {
        return this.studentId;
    }

    // Overriding the greet method to include studentId in the message
    greet() {
        console.log(`Your name is ${this.name}, your age is ${this.age}, and your student ID is ${this.studentId}.`);
    }

    // Static method to get the total number of students
    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

const student1 = new Student();
const student2 = new Student();
const student3 = new Student();

// student1.getStudentCount(); error bcoz Both the static method and the static property are accessed using the class name, not the instance.

// Logging the total number of students created
console.log(Student.getStudentCount()); // Logs: Total number of students: 2


