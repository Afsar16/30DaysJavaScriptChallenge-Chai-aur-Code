// Activity 2: Destructuring

// * Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console

let arr = [1,2,3,4,5,6];
let [first, second, third] = arr;

console.log(`first = ${first}`);
console.log(`second = ${second}`);
console.log(`third = ${third}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

let {title, author} = book;

console.log(`title = ${title}`);
console.log(`author = ${author}`);

