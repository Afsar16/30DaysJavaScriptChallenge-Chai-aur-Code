// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.

const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';
const url3 = 'https://jsonplaceholder.typicode.com/posts/3';

async function fetchFirst() {
  try {
      const firstPromise = await Promise.race([
          fetch(url1).then(response => {
              if (!response.ok) throw new Error(`Error: ${response.statusText}`);
              return response.json();
          }),
          fetch(url2).then(response => {
              if (!response.ok) throw new Error(`Error: ${response.statusText}`);
              return response.json();
          }),
          fetch(url3).then(response => {
              if (!response.ok) throw new Error(`Error: ${response.statusText}`);
              return response.json();
          })
      ]);
      console.log('First resolved data:', firstPromise);
  } catch (error) {
      console.log('Error:', error);
  }
}

fetchFirst();
