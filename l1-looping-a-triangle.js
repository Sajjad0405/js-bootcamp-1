function createTriangle(totalAmountOfHashtags) {
    // Set an empty triangle
    let triangle = '';

    // Loop through the amount of hashtags that the user wants
    for (var i = 0; i < totalAmountOfHashtags; i++) {
        // Add a hashtag to the string at every iteration
        triangle += '#';
        // Display the triangle in the console
        console.log(triangle);
    }
}

createTriangle(7);