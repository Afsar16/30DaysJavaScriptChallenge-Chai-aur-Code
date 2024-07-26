// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console.

// // Invalid URL for the fetch request
// const invalidURL = 'https://invalid.url/endpoint';

// // Fetch request with .catch() to handle errors
// fetch(invalidURL)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log('Fetch error:', error.message);
//     });


// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

// Invalid URL for the fetch request
const invalidURL = 'https://invalid.url/endpoint';

// Async function to handle the fetch request with try-catch
async function fetchData() {
    try {
        const response = await fetch(invalidURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Fetch error:', error.message);
    }
}

// Call the async function
fetchData();
