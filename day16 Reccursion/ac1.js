// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result. 

function outer() {
    let out = "hello from outer";
    console.log(out);

    function inner() {
        return "hello from inner";
    }

    return inner;
}

const myfunction = outer();
// console.log(myfunction) // hello from outer
                        // [Function: inner]
console.log(myfunction())

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter

function createCounter() {
    let counter = 0; // Private counter variable

    return {
        // Function to increment the counter
        increment: function() {
            counter++;
        },
        // Function to get the current counter value
        getValue: function() {
            return counter;
        }
    };
}

// Create a counter instance
const myCounter = createCounter();

// Test the counter
myCounter.increment(); // Increments the counter
myCounter.increment(); // Increments the counter again
console.log(myCounter.getValue()); // Logs: 2

myCounter.increment(); // Increments the counter again
console.log(myCounter.getValue()); // Logs: 3

