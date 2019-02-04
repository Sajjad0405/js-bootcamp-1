function createChessboard(size) {
    // Set an empty grid
    let grid = "";
    
    // Loop through the amount of rows
    for (let row = 0; row < size; row++) {
        // Loop through the amount of columns
        for (let col = 0; col < size; col++) {
            // If a column is 'even', display a space
            if ((row + col) % 2 === 0) {
                grid += " ";
            // If a column is 'uneven', display a hashtag
            } else {
                grid += "#";
            }
        }
        // After each created row, add a newline
        grid += "\n";
    }
    // Display the grid in the console
    console.log(grid);
}

createChessboard(8);