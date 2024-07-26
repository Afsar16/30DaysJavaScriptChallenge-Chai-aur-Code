// Select the image element
const image = document.getElementById('myImage');

// Add double-click event listener to the image
image.addEventListener('dblclick', function() {
    // Toggle the visibility of the image
    // if (image.style.visibility === 'hidden') {
    //     image.style.visibility = 'visible';
    // } else {
    //     image.style.visibility = 'hidden';
    // }
    //soln2
    if (image.style.display === 'none') {
        console.log('if')
        image.style.display = 'block';
    } else {
        console.log('else')
        image.style.display = 'none';
    }

    //soln 3
    // const currentDisplay = window.getComputedStyle(image).display;

    // // Toggle the visibility of the image
    // if (currentDisplay === 'none') {
    //     image.style.display = 'block';
    // } else {
    //     image.style.display = 'none';
    // }
});
