let is_fr = true

// JE RÉCUPÈRE LA DONNÉE AU FORMAT JSON
function load_json(url) {
    fetch(url)
    .then(resp => resp.json())
    .then(data => append_data(data))
}

// J'INJECTE LES DONÉES DANS LA PAGE HTML
function append_data(data) {
    document.getElementById('title').innerText = data['title']
    document.getElementById('button').innerText = data['button']
    document.getElementById('description').innerText = data['description']
    document.getElementById('home').innerText = data['home']
    document.getElementById('features').innerText = data['features']
    document.getElementById('contact').innerText = data['contact']
}

// JE CHANGE DE LANGUE AVEC UN TOGGLE
function switch_lang() {
    is_fr = !is_fr
    // SI LE TOGGLE EST À TRUE
    if (is_fr) {
        // JE LUI PASSE LES DONÉES EN FRANÇAIS
        load_json('./data_fr.json')
    // SI LE TOGGLE EST À FALSE
    } else {
        // JE LUI PASSE LES DONÉES EN ANGLAIS
        load_json('./data_en.json')
    }
}

// J'INITIALIZE LES DONÉES AU CHARGEMENT DE LA PAGE
load_json('./data_fr.json')