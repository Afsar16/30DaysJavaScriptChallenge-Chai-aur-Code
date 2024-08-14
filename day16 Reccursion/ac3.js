// Activity 3: Closures in Loops 

// * Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray() {
    const functionArray = [];

    for (let i = 0; i < 5; i++) {
        console.log(functionArray)
        functionArray.push(function() {
            console.log(i);
        });
    }

    return functionArray;
}

// Create the array of functions
const functions = createFunctionArray();

// Call each function to log its index
// functions[0](); // Logs: 0
// console.log(functions)// Logs: 0
functions[1](); // Logs: 1
// functions[2](); // Logs: 2
// functions[3](); // Logs: 3
// functions[4](); // Logs: 4

