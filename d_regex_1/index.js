// METHODE 1
const script_msg = "sdfERTwERTdfgERTeERTdfgERTlRTYdfgERTlRTYdfgERT ERTdfgERTdZERdfgERToERTdfgERTnERTdfgERTeERTsdf"
let msg = ""
const regex_1 = new RegExp('[a-z]{3}[A-Z]{3}[a-z- ][A-Z]{3}');

function find_msg(sentence) {
    for (let i = 0; i < sentence.length - 8; i++) {
        let maj = ""
        for (let j = 0; j < 10; j++) {
            letter = sentence[(i+j)%sentence.length]
            maj += letter
        }
        if (maj.match(regex_1)) {
            msg += maj[6]
        }
    }
    console.log(msg);
}

find_msg(script_msg)

// METHODE 2
console.log(script_msg.replace(/[a-z]{3}|[A-Z]{3}/g, ""))