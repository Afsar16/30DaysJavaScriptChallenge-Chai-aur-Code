
function a(a, b=10) {
        return a * b;
}

console.log(a(10)) //100
console.log(a(10,20))// 200

// Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function dataentry(name, age=22) {
    console.log(`Hello ${name} good morning, Your are ${age} years old`);
}

dataentry("Afsar");