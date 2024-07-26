
function throwErr () {
    throw new Error('this is an error');
}

function handleError () {
    try {
        throwErr();
    } catch (error) {
        // console.log(error);
        console.log(error.message)
    }
}

handleError();

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function div(numerator , denominator) {
    if(denominator == 0) {
        throw new Error("denominator error")
    }
    return numerator/denominator;
}


function handleDivision(n, d) {
    try {
        const res = div(n, d);
        console.log(res);
    } catch (error) {
        console.log(error.message)
    }
}

handleDivision(10, 2);
handleDivision(10, 0);