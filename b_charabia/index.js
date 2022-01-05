const charabia = "&éæù¨€´b&œ'´&œ)´\\{¡ˇð ̵}…œ&àçr)àçæù¨…}…€a\\¿††µ{©þß®}…(-)vþß®à_-o"
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
    console.log(res);
}
show_msg(charabia)