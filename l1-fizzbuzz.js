function fizzBuzz() {
    // Loop from 0 to 100
    for (var number = 0; number <= 100; number++) {
        // If a number can be divided by 3 and 5, display FizzBuzz instead of a number
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('FizzBuzz');
        // If a number can be divided by 3, display Fizz instead of a number
        } else if (number % 3 === 0) {
            console.log('Fizz');
        // If a number can be divided by 5, display Buzz instead of a number
        } else if (number % 5 === 0) {
            console.log('Buzz');
        // If neither of the aforementioned is the case, display the number.
        } else {
            console.log(number);
        }
    }
}

fizzBuzz();