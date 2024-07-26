// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function throwErr () {
    throw new Error('this is an error');
}

function handleError () {
    try {
        console.log("try")
        throwErr();
    } catch (error) {
        // console.log(error);
        console.log(error.message)
    }
    finally {
        console.log("finally")
    }
}

handleError();