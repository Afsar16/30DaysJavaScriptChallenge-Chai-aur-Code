// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('this is setTimeout');
//     }, 2000);
//     console.log(res)
//     console.log(rej)
// }); 

// promise.then((message) => {
//     console.log(message)
// })
// .catch((err) => {
//     console.log(err)
// })

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().

const rejPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('the promise is rejected')
    }, 2000);
})

rejPromise.then((msg) => {
    console.log(msg)
})
.catch((err) => {
    console.log(err)
});


