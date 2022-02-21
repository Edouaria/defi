const alphabet = 'abcdefghifklmnopqrstuvwxyz'
let count = 0

function letter_pair() {
    for (const letter_1 of alphabet) {
        for (const letter_2 of alphabet) {
            if (letter_1 != letter_2) {
                console.log(letter_1 + letter_2);
                count += 1
            }
        }    
    }
    console.log(count);
}

letter_pair()