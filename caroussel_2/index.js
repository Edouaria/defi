const img = document.querySelector('img')
const dot_container = document.getElementById('dot_container')
const dots = document.getElementsByClassName('dot')
let path_list = ["../17_caroussel/img/audacity_logo.png", "../17_caroussel/img/bash_logo.png", "../17_caroussel/img/git_logo.png", "../17_caroussel/img/framasoft_logo.png", "../17_caroussel/img/godot_logo.png", "../17_caroussel/img/inkscape_logo.png", "../17_caroussel/img/krita_logo.png", "../17_caroussel/img/linux_logo.png"]
let current_indice_path = 0
const GREY = 'grey'
const BLACK = 'black'

// J'APPEL L'IMAGES SUIVANTE OU PRÉCÉDENTE
const next = (val) => {
    // LA VIGNETTE PRÉCÉDENTE EST GRISE
    dots[current_indice_path].style.backgroundColor = GREY
    // J'INCRÉMENTE OU DÉCRÉMENTE L'INDICE SELON L'ARGUMENT
    current_indice_path += val
    // SI ON INCRÉMENTE À LA DERNIÈRE IMAGE, ON REVIENT À LA PREMIÈRE
    current_indice_path %= path_list.length
    // SI ON DÉCRÉMENTE À LA PREMIÈRE IMAGE, ON REVIENT À LA DERNIÈRE
    if (current_indice_path < 0) {
        current_indice_path = path_list.length - 1
    }
    // LA VIGNETTE COURANTE DEVIENT NOIR
    dots[current_indice_path].style.backgroundColor = BLACK
    // JE MET À JOUR LE CHEMIN DE L'IMAGE
    img.src = path_list[current_indice_path]
}

// JE GÉNÈRE LES VIGNETTES CORRESPONDANTE AUX IMAGES
function gen_dots() {
    // POUR CHAQUE IMAGE, JE CRÉÉ UNE VIGNETTE
    for (let i = 0; i < path_list.length; i++) {
        // JE CRÉÉ LA VIGNETTE
        let div = document.createElement('div')
        div.className = 'dot'
        // JE LUI DONNE UN INDICE AFIN DE LA DISTINGUER DES AUTRES VIGNETTES
        div.slot = i
        // QUAND ON CLIQUE SUR LA VIGNETTE ON AFFICHE L'IMAGE CORRESPONDANTE
        div.addEventListener('click', () => {
            // LA COULEUR DE LA VIGNETTE PRÉCÉDENTE REDEVIENT GRISE
            dots[current_indice_path].style.backgroundColor = GREY
            // L'INDICE DE L'IMAGE COURANTE EST MIS À JOUR
            current_indice_path = parseInt(div.slot)
            // JE MET À JOUR LE CHEMIN DE L'IMAGE
            img.src = path_list[i]
            // LA VIGNETTE COURANTE DEVIENT NOIR
            div.style.backgroundColor = BLACK
        })
        // JE PRÉCISE LA BALISE HTML DANS LAQUELLE LES VIGNETTES SERONT CONTENUES
        dot_container.appendChild(div)
    }
    // AU CHARGEMENT DE LA PAGE J'INITIALISE LA COULEUR DE LA PREMIÈRE VIGNETTE
    dots[current_indice_path].style.backgroundColor = BLACK
}

// LA GÉNÉRATION DES VIGNETTES SE FAIT DÉS LE CHARGEMENT DE LA PAGE
gen_dots()
