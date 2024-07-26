// Custom error class that extends the built-in Error class
class CustomError extends Error {
    constructor(message) {
        console.log(message)
        super(message); // Call the parent class constructor
        this.name = 'CustomError'; // Set the name property to the custom error name
    }
}

// Function that throws an instance of the custom error
function throwCustomError() {
    throw new CustomError('This is a custom error');
}

// Function to handle the custom error using a try-catch block
function handleCustomError() {
    try {
        throwCustomError();
    } catch (error) {
        if (error instanceof CustomError) {
            console.log('Caught a custom error:', error.message);
        } else {
            console.log('Caught an unexpected error:', error);
        }
    }
}

// Call the function that handles the custom error
handleCustomError();

// Custom error class for validation errors
class ValidationError extends Error {
    constructor(message) {
        super(message); // Call the parent class constructor
        this.name = 'ValidationError'; // Set the name property to the custom error name
    }
}

// Function to validate user input
function validateInput(input) {
    if (!input || input.trim() === '') {
        throw new ValidationError('Input cannot be empty');
    }
    return 'Input is valid';
}

// Function to handle the validation error using a try-catch block
function handleValidation(input) {
    try {
        const result = validateInput(input);
        console.log(result);
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log('Validation error:', error.message);
        } else {
            console.log('Caught an unexpected error:', error);
        }
    }
}

// Test the function with different inputs
handleValidation('');         // Should print: Validation error: Input cannot be empty
handleValidation('Hello');    // Should print: Input is valid
handleValidation('   ');      // Should print: Validation error: Input cannot be empty
handleValidation('World');    // Should print: Input is valid
