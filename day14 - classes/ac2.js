// Activity 2: Class Inheritance
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
// * Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID. Create an instance of the Student class and log the student ID

class Student extends Person {
    sid;
    StudentId (sid) {
        this.sid = sid;
        console.log(`${this.sid}`)
    }
    // * Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
    greet() {
        console.log(`your name is ${this.name} and age is ${this.age} and your sid is ${this.sid}`)
    }
}

const s = new Student;
s.StudentId(6);
s.greet();

