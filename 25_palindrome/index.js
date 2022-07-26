// let re = /[^A-Za-z0-9]/g
let re = /[\W_]/g

function palindrome(word) {
    if (word == undefined) {
        console.log('veuillez rentrer un mot');
    } else {
        const clear_word = word.replace(re, '')
        const word_reverse = [...clear_word].reverse().join('')
        if (word_reverse == clear_word) {
            console.log(`${word} est un palindrome`);
        } else {
            console.log(`${word} n'est pas un palindrome`);
        }
    }
}
