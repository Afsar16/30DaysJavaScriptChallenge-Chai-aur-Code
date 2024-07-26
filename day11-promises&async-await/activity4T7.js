const url = 'https://jsonplaceholder.typicode.com/posts/1'

async function fetchUrl() {
  try {
    const response = await fetch(url);
    // console.log(response.json())// promise pending

    if(!response.ok) {
      throw new Error("response error ", response.statusText)
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('catch error ', error)
  }
}

fetchUrl();