//  Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values. 

const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
const url3 = 'https://jsonplaceholder.typicode.com/posts/3';

async function fetchall () {
    try {
        const promises = await Promise.all([
            fetch(url1),
            fetch(url2),
            fetch(url3)
        ]);
        const dataPromises = promises.map((promise) => {
            if(!promise.ok) {
                throw new Error('promise error', promise.statusText);
            }
            return promise.json();
        })
        const data = await Promise.all(dataPromises);
        console.log('data', data);

    } catch (error) {
        console.log('error', error);
    }
}

fetchall();