const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
.then(response => console.log(response.data))
.catch(error => console.log(error.message))

/* Axios
What It Is:

axios is a popular JavaScript library used to make HTTP requests from Node.js or in the browser. It is based on Promises, making it easier to handle asynchronous operations.
What It Does:

HTTP Requests: axios allows you to send HTTP requests (GET, POST, PUT, DELETE, etc.) to servers and APIs. It handles the complexities of network requests and responses, and it is often used for fetching or sending data.
Promise-based: Since axios is promise-based, it integrates smoothly with async/await syntax for cleaner and more readable asynchronous code.
Automatic JSON Handling: It automatically parses JSON responses and handles content-type headers.
Request and Response Interceptors: You can intercept requests or responses to perform actions or transformations, such as adding authentication tokens or logging.
Error Handling: Provides a standardized way to handle errors from HTTP requests. */

/* 
Let's dive into what axios and lodash do:

Axios
What It Is:

axios is a popular JavaScript library used to make HTTP requests from Node.js or in the browser. It is based on Promises, making it easier to handle asynchronous operations.
What It Does:

HTTP Requests: axios allows you to send HTTP requests (GET, POST, PUT, DELETE, etc.) to servers and APIs. It handles the complexities of network requests and responses, and it is often used for fetching or sending data.
Promise-based: Since axios is promise-based, it integrates smoothly with async/await syntax for cleaner and more readable asynchronous code.
Automatic JSON Handling: It automatically parses JSON responses and handles content-type headers.
Request and Response Interceptors: You can intercept requests or responses to perform actions or transformations, such as adding authentication tokens or logging.
Error Handling: Provides a standardized way to handle errors from HTTP requests.
Example Usage:

javascript
Copy code
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // Process the data
  })
  .catch(error => {
    console.error('Error:', error); // Handle errors
  });
Lodash
What It Is:

lodash is a utility library that provides a wide range of functions to simplify common programming tasks, especially with arrays, objects, and strings. It’s widely used for its rich set of utility functions that enhance JavaScript’s built-in capabilities.
What It Does:

Array Manipulation: Provides functions for operations like filtering, mapping, reducing, and sorting arrays. For example, _.filter can be used to filter elements based on a condition.
Object Operations: Includes utilities for manipulating and querying objects, such as _.merge for deep merging objects.
Function Utilities: Offers functions like _.debounce and _.throttle to control the rate at which functions are executed.
String Manipulation: Includes utilities for string operations, such as _.camelCase and _.escape.
Data Transformation: Facilitates data transformation with functions like _.map and _.reduce. */