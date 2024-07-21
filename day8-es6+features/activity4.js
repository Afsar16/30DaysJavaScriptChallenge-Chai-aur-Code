// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1 Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
    return a * b;
}

// Calling the function with both parameters
console.log(multiply(5, 3)); // Output: 15

// Calling the function with only the first parameter
console.log(multiply(5)); // Output: 5
