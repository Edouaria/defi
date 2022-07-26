// S = Spade
// H = Heart
// D = Diamond
// C = Club

// J = Jack
// Q = Queen
// K = King
// A = Ace

const symbols = ['S', 'H', 'D', 'C']
const card_num = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

// GÉNÈRE UN JEUX DE 52 CARTES
function gen_card_game() {
    let card_game = []
    symbols.map(s => {
        card_num.map(n => {
            card_game.push(s + n)
        })
    })
    return card_game
}

// GÉNÈRE UN JEUX DE 51 CARTES
function remove_card() {
    const missing_card = Math.floor(Math.random() * 52)
    const card_game_of_51 = gen_card_game().splice(missing_card, 1)
    return card_game_of_51
}

// COMPARE LES DEUX JEUX DE 51 ET 52 CARTES
function find_missing_card() {
    const card_game_of_51 = remove_card()
    const card_game_of_52 = gen_card_game()
    // POUR CHAQUE CARTE DU JEUX DE 52
    card_game_of_52.map(card => {
        // SI LA CARTE N'EST PAS PRÉSENTE DANS LE JEUX DE 51
        if (!card_game_of_51.includes(card)) {
            // AFFICHE LA CARTE MANQUANTE
            console.log('card', card);
        }
    })
}

find_missing_card()
