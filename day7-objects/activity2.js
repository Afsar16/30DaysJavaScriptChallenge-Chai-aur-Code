// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method

const book = {
    title: "mathematics",
    author: "john cena",
    year: 2002
}

// book.getdetails = function() {
//     return `title = ${book.title} author = ${book.author}`
// }

// console.log(book.getdetails());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.addyear = function(year) {
    this.year = year; // this.year = newYear; makes the method adaptable to different contexts, while book.year = newYear; explicitly updates the year property of the book object.
    // console.log(book);
}

book.addyear(2005);
console.log(book)