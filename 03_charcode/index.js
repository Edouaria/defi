const sentence = "jnb ohex ng uhxny xlm otvaxfxgm vhlmtnw"
let res = ""
function toto() {
    let ord = 0
    let dif = 0
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] == " ") {
            chr = " "
        } else {
            ord = sentence[i].charCodeAt(0)
            ord += 7
            if (ord >= 123) {
                dif = ord - 122
                ord = 96 + dif
            }
            if (ord <= 96) {
                dif = ord - 97
                ord = 123 + dif
            }
            chr = String.fromCharCode(ord)
        }
        res += chr
    }
    console.log(res);
}
toto()