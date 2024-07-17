// function high(low, num) {
//     while(num >= 0 ) {
//         low();
//         num--;
//     }
// }

// function func() {
//     console.log("This is low")
// }

// // high(low, 10); same
// high(func, 10);

// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function higher(f1, f2, n) {
    let v1 = f1(n);
    let v2 = f2(v1);
    return v2;
}

function fun1(n) {
    return n * n;
}

function fun2(value) {
    return value + 10;
}

let res = higher(fun1, fun2, 6);
console.log(res);
