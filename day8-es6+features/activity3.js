// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let arr = [1,2,3];
let newarr = [...arr, 4,5,6];
console.log(newarr)

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result

function arrsum(...number) {
  return number.reduce((total, num) => total + num, 0); // 0 is used to set the initial value. 
}

console.log(arrsum(1,2,3,4));
console.log(arrsum(1,2,3,4,5,6));

// In summary, the spread operator is used to expand elements, while the rest operator is used to collect elements. 


