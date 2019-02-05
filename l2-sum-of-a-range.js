// Function calls:
console.log(range(1, 10));
console.log(range(-1, -10));
console.log(sum(range(1, 10)));
console.log(rangeWithSteps(1, 10, 3));

// Function declarations:
// Basic range function
function range(start, end) {
    const range = [];

    // Loop through the range and log out all numbers
    // If end is negative, run the negative loop, else, run positive loop
    if (end < 0) {
        for (let i = start; i >= end; i--) {
            range.push(i);
        }
    } else {
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
    }

    return range;
}



// Sum of range
function sum(arr) {
    const numbersToSum = [];
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        numbersToSum.push(arr);
    }

    for (let i = 0; i <= numbersToSum.length; i++) {
        total += i;
    }

    return total;
}

// Range with steps
function rangeWithSteps(start, end, steps = 1 /* Fallback value if undefined */) {
    const range = [];

    if (end < 0) {
        for (let i = start; i >= end; i-=steps) {
            range.push(i);
        }
    } else {
        for (let i = start; i <= end; i+=steps) {
            range.push(i);
        }
    }

    return range;
}

