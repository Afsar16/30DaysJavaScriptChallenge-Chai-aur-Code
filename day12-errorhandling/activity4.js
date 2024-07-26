// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

// function handlePromise1() {
//     return new Promise((resolve, reject) => {
//         const num = Math.random();
//         if(num < 0.5) {
//             resolve("promise is resolved")
//         }
//         else {
//             reject(new Error("promise Rejected"))
//         }
//     })
// }

// handlePromise1()
// .then(result => console.log(result))
// .catch(error => console.log(error.message))

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

// Function that returns a promise which randomly resolves or rejects
function randomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            resolve('Promise resolved successfully');
        } else {
            reject(new Error('Promise was rejected'));
        }
    });
}

// Async function to handle the promise with try-catch
async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.log('An error occurred:', error.message);
    }
}

// Call the async function
handlePromise();
