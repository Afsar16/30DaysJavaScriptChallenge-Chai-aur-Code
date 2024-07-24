// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwErr () {
    throw new Error('this is an intensional Error');
}

function handleErr() {
    try {
        throwErr();
    } catch (error) {
        // console.log(error) 
        /* this gives Error: this is an intensional Error
    at throwErr (C:\Users\LENOVO\Desktop\30daysJS\day11-promises&async-await\activity1.js:6:11)
    at handleErr (C:\Users\LENOVO\Desktop\30daysJS\day11-promises&async-await\activity1.js:11:9)
    at Object.<anonymous> (C:\Users\LENOVO\Desktop\30daysJS\day11-promises&async-await\activity1.js:18:1)
    at Module._compile (node:internal/modules/cjs/loader:1358:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1416:10)
    at Module.load (node:internal/modules/cjs/loader:1208:32)
    at Module._load (node:internal/modules/cjs/loader:1024:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
    at node:internal/main/run_main_module:28:49
this is an intensional Error */
        console.log(error.message); // this is an intensional Error 
    }
}

// handleErr();

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divide (n1, n2) {
    try {
        if(n2 == 0) {
            throw new Error("divide by zero error");
        }
        let sum = n1 / n2;
        return sum;
    } catch (error) {
        console.log(error.message);
    }
}

const a = divide(1,0); 
console.log(a) // undefined

const b = divide(32, 2);
console.log(b) // 16 

// gpt code 
function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return numerator / denominator;
}

function performDivision(numerator, denominator) {
    try {
        const result = divide(numerator, denominator);
        console.log('Result:', result);
    } catch (error) {
        console.log('Caught an error:', error.message);
    }
}

performDivision(10, 2);  // Valid division
performDivision(10, 0);  // Division by zero
