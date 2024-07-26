// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchData(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay)
    })
}

fetchData("fetching data 1", 5000)
.then((message) => {
    console.log(message)
    return fetchData("fetching data 2", 3000);
})
.then((message) => {
    console.log(message)
    return fetchData("fetching data 3", 1000);
})
.then((message) => {
    console.log(message)
    console.log("all msg data fetched successfully")
})
.catch((err) => {
    console.error(err)
})
