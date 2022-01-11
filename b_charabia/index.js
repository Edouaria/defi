const charabia = "&éæù¨€´b&œ'´&œ)´\\{¡ˇð ̵}…œ&àçr)àçæù¨…}…€a\\¿††µ{©þß®}…(-)vþß®à_-o"

// METHOD 1
const alphabet = "abcdefghifklmnopqrstuvwxyz"
res = ""
function show_msg(msg) {
    for (let i = 0; i < msg.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (msg[i] == alphabet[j]) {
                res += msg[i]
            }
        }
    }
    console.log('méthode_1', res);
}
show_msg(charabia)

// METHOD 2
const regex = charabia.match(/[a-z]/g)
let msg = ""
for (let i = 0; i < regex.length; i++) {
    msg += regex[i]
}
console.log('méthode_2', msg);

// METHOD 3
console.log('méthode_3', charabia.replace(/[^a-z]/g, ""));