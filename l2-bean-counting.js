// B counter
function countBs(string) {
    const letterToLookFor = "B";
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === letterToLookFor) {
            counter++;
        }
    }
    return `There are ${counter} B's in the word ${string}.`;
}

console.log(countBs("BooBooBakingButcher"));
// > There are 4 B's in the word BooBooBakingButcher

// Char counter
function charCount(string, char = "B" /* Fallback */) {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            counter++;
        }
    }
    return `There are ${counter} ${char}'s found in the ${string.length > 10 ? 'sentence' : 'word'} '${string}'`;
}

console.log(charCount("Zieke JavaScript dingen zijn lachen", "a"));
// > There are 3 a's found in the sentence 'Zieke JavaScript dingen zijn lachen'.