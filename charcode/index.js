const sentence = "X|p'}vsl'|u'ivl|m'lz{'}hjoltlu{'jvz{h|k"
let res = ""
function toto() {
    let ord = 0
    for (let i = 0; i < sentence.length; i++) {
        ord = sentence[i].charCodeAt(0)
        chr = String.fromCharCode(ord - 7)
        res += chr
    }
    console.log(res);
}
toto()