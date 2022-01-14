const guess_number = document.getElementById("guess_number")
const message = document.getElementById("message")
const essai = document.getElementById("essai")
let number = parseInt(Math.random()*1000)
let count = 0

// DÉFINIR UN NOMBRE ALÉATOIRE
function random_number() {
    number = parseInt(Math.random() * 1000);
}

// COMPARER LE NOMBRE RANDOM AVEC LE NOMBRE CHOISI PAR LE JOUEUR
function guess() {
    // VÉRIFIER QUE LA VALEUR DE L'INPUT N'EST PAS VIDE ET QUE CE N'EST PAS UNE CHAINE DE CARACTERE
    if (guess_number.value != "") {
        // SI LE NOMBRE EST INFÉRIEUR
        if (number < guess_number.value) {
            message.innerHTML = "C'est moins"
        }
        // SI LE NOMBRE EST SUPÉRIEUR
        if (number > guess_number.value) {
            message.innerHTML = "C'est plus"
        }
        // SI LE NOMBRE EST ÉGALE
        if (number == guess_number.value) {
            message.innerHTML = "Gagné"
        }
        // INCRÉMENTER LE NOMBRE D'ESSAI
        count += 1
    } else {
        message.innerHTML = "veuillez rentrer un nombre"
    }
    // AFFICHER LE NOMBRE D'ESSAI
    essai.innerHTML = `nombre d'essai : ${count}`
}

// RELANCER LA PARTIE
function reset() {
    random_number()
    guess_number.value = ""
    message.innerHTML = "..."
    count = 0
    essai.innerHTML = "nombre d'essai :"
}