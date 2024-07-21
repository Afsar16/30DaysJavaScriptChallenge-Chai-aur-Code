// Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

// Define the book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    }
};

// Use a for...in loop to iterate over the properties of the book object
// for (let property in book) {
//     if (book.hasOwnProperty(property)) {
//         console.log(`${property}: ${book[property]}`); // getDetails: function() { ... }
//     }
//     // console.log(book[property]) // [Function: getDetails]
// }


// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

let keys = Object.keys(book)
let values = Object.values(book)

console.log(keys)
console.log(values)