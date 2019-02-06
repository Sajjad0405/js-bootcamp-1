let array = [[1, 2, 3], [4, 5], [6]];

console.log(array.reduce( (acc, item) => acc.concat(item) ));