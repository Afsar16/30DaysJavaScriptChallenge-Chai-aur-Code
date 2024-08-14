// Activity 2: Practical Closures

// * Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call

function createIdGenerator() {
    let lastId = 0; // Private variable to keep track of the last generated ID

    return function() {
        lastId++; // Increment the last ID
        return lastId; // Return the new ID
    };
}

// Create an ID generator instance
const generateId = createIdGenerator();

// Generate unique IDs
console.log(generateId()); // Logs: 1
console.log(generateId()); // Logs: 2
console.log(generateId()); // Logs: 3


// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function createGreeter(userName) {
    return function() {
        console.log(`Hello, ${userName}! Welcome back!`);
    };
}

// Create a greeter function for a specific user
const greetAfsar = createGreeter("Afsar");

// Use the greeter function to greet the user
greetAfsar(); // Logs: Hello, Afsar! Welcome back!

console.log(greetAfsar()) // Logs: (Hello, Afsar! Welcome back! and undefined)-> In JavaScript, if a function doesn't return a value, it implicitly returns undefined.