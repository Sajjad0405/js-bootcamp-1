function giveMin(...args) {
    let min = Math.min(...args);
    return min;
}

console.log(giveMin(6, 12, 102, 67, 9, -10));
// > - 10