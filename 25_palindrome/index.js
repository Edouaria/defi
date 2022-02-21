function palindrome(word) {
    if (word == undefined) {
        console.log('veuillez rentrer un mot');
    } else {
        const word_reverse = [...word].reverse().join('')
        if (word_reverse == word) {
            console.log(`${word} est un palindrome`);
        } else {
            console.log(`${word} n'est pas un palindrome`);
        }
    }
}