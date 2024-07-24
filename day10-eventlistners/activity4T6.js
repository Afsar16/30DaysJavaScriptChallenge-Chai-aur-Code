// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

const url = 'https://jsonplaceholder.typicode.com/posts/1';

function fetchapi() {
    fetch(url)
    .then((response => {
        console.log(response.ok)
        if(!response.ok) {
            throw new Error('url error ' + response.statusText);
        }
        // console.log(response.json());
        return response.json();
    }))
    .then((response) => {
        // console.log(data.json())
        console.log('response data' , response);
    })
    .catch((error) => {
        console.log('fetch error' , error);
    })
}

fetchapi();