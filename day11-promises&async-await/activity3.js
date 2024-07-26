// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
function p(msg, delay) {
    return new Promise((res, rej) => {
        console.log(msg)
        setTimeout(() => {
            res(msg);
            res(msg);
        }, delay);        
    })
};

async function asf() {
    try {
        const msg = await p("this is msg", 5000);
        console.log(msg)
    } catch (error) {
        console.log(error)
        
    }
}

// asf();


// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.  

function pReject(msg, delay) {
    return new Promise((res, rej) => {
        console.log(msg);
        setTimeout(() => {
            // rej(new Error("Promise was rejected!")); // for rej -> execute catch
            // res(msg); // for res -> execute try 
        }, delay);
    });
}

async function handleRejection() {
    try {
        const msg = await pReject("This will be rejected", 3000);
        console.log(msg);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        // console.log(msg)
    }
}

handleRejection();
  
