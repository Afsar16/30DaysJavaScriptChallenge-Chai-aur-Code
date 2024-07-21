// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

const book = {
    title: "mathematics",
    author: "john cena",
    year: 2002
}

book.thisKey = function() {
    return `title = ${this.title} and year = ${this.year}`
}

console.log(book.thisKey()); 


