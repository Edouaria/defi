const symbols = ['S', 'H', 'D', 'C']
const card_num = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

function gen_card_games() {
    let card_games = []
    symbols.map(s => {
        card_num.map(c => {
            card_games.push(s + c)
        })
    })
    return card_games
}

function remove_card() {
    const card_games_of_51 = gen_card_games()
    const missing_card = Math.floor(Math.random() * 52)
    card_games_of_51.splice(missing_card, 1)
    return card_games_of_51
}

function find_missing_card() {
    const card_games_of_51 = remove_card()
    const card_games_of_52 = gen_card_games()
    card_games_of_52.map(card => {
        if (!card_games_of_51.includes(card)) {
            console.log('card', card);
        }
    })
}

find_missing_card()