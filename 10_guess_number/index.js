const title = document.querySelector('p')
const guess_number = document.getElementById("guess_number")
const message = document.getElementById("message")
const essai = document.getElementById("essai")
let range = 100
let number = 0
let count = 0

title.innerText = `Choisi un nombre entre 0 et ${range}`
// DÉFINIR UN NOMBRE ALÉATOIRE
function random_number() {
    number = parseInt(Math.random() * range)
}

// COMPARER LE NOMBRE RANDOM AVEC LE NOMBRE CHOISI PAR LE JOUEUR
function guess() {
    // VÉRIFIER QUE LA VALEUR DE L'INPUT N'EST PAS VIDE ET QUE CE N'EST PAS UNE CHAINE DE CARACTERE
    if (guess_number.value == "") {
        message.innerHTML = "veuillez rentrer un nombre"
    } else {
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
    }
    // AFFICHER LE NOMBRE D'ESSAI
    essai.innerHTML = `nombre d'essai : ${count}`
}

// RELANCER LA PARTIE
function reset() {
    // REGENERER UN NOMBRE ALÉATOIRE
    random_number()
    // VIDER LES CHAMPS
    guess_number.value = ""
    message.innerHTML = ""
    essai.innerHTML = "nombre d'essai :"
    // REMETTRE LE COMPTEUR À 0
    count = 0
}

// INITIALISER LE NOMBRE AlÉATOIRE AU CHARGEMENT DE LA PAGE
random_number()