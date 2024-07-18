// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const arr = [1,2,3,4,5,6];

// console.log(arr);

const newarr = arr.map(i => i*2);// i => i * 2 is an arrow function

// console.log(newarr);

// array.map(callback(currentValue[, index[, array]])[, thisArg])
/* 
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number, index, array) => {
  console.log(`Processing element at index ${index} in array [${array}]`);
  return number * 2;
});
console.log(doubledNumbers);
*/


// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const a = [1,2,3,4,5,6,7,8,9,10];
// console.log(a);

const filter = a.filter(i => i % 2 === 0); // == is also possible 

// console.log(filter);


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const b = [1,2,3,4,5,6];

const sum = b.reduce((i, sum) => i+sum, 0);

console.log(sum);