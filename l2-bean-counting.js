// B counter
function countBs(string) {
    const letterToLookFor = "B";
    let counter = 0;

    // Loop through the string
    for (let i = 0; i < string.length; i++) {
        // If you find a B, update counter
        if (string[i] === letterToLookFor) {
            counter++;
        }
    }
    // Return the total amount of B's by returning the final binding of the counter
    return `There are ${counter} B's in the word ${string}.`;
}

console.log(countBs("BooBooBakingButcher"));
// > There are 4 B's in the word BooBooBakingButcher

// Char counter
function charCount(string, char = "B" /* Fallback */) {
    let counter = 0;

    // Loop through the string
    for (let i = 0; i < string.length; i++) {
        // If the char matches a letter in the string, update counter
        if (string[i] === char) {
            counter++;
        }
    }
    // Return the total amount of times that char was found in the string by returning the final binding of counter
    return `There are ${counter} ${char}'s found in the ${string.length > 10 ? 'sentence' : 'word'} '${string}'`;
}

console.log(charCount("Zieke JavaScript dingen zijn lachen", "a"));
// > There are 3 a's found in the sentence 'Zieke JavaScript dingen zijn lachen'.