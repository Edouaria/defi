const alphabet = 'abcdefghifklmnopqrstuvwxyz'

function letter_pair() {
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            console.log(alphabet[i]+alphabet[j])
        }
    }
}

letter_pair()
