// Activity 3: Nested Objects

// * Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

let nestobj = {
  name : "semester8",
  books : [{
    slno: 1,
    name: "iot",
  },
  {
    slno: 2,
    name: "san",
  },
  {
    slno: 3,
    name: "project"
  }
]
}

console.log(nestobj)

// * Task 6: Access and log the name of the library and the names of all the books in the library.

let n = nestobj.name;

let book1 = nestobj.books.name;

console.log(n)
nestobj.books.forEach(book => {
  console.log(book.name);
})