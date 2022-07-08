const img = document.querySelector('img')
const dot_list = document.getElementsByClassName('dot')
const dot_container = document.getElementById('dot_container')
let path_list = ["../17_caroussel/img/audacity_logo.png", "../17_caroussel/img/bash_logo.png", "../17_caroussel/img/git_logo.png", "../17_caroussel/img/framasoft_logo.png"]
let current_indice_path = 0
let COLOR_BLACK = 'black'
let COLOR_GREY = 'grey'

function gen_dots() {
    for (let i = 0; i < path_list.length; i++) {
        let div = document.createElement('div')
        div.className = 'dot'
        div.slot = i
        div.addEventListener('click', () => {
            dot_list[current_indice_path].style.backgroundColor = COLOR_GREY
            current_indice_path = parseInt(div.slot)
            img.src = path_list[current_indice_path]
            div.style.backgroundColor = COLOR_BLACK
        })
        dot_container.appendChild(div)
    }
    dot_list[0].style.backgroundColor = COLOR_BLACK
}

gen_dots()

const next = (val) => {
    current_indice_path += val
    current_indice_path %= path_list.length
    if (current_indice_path < 0) {
        current_indice_path = path_list.length - 1
    }
    img.src = path_list[current_indice_path]
    for (const dot of dot_list) {
        dot.style.backgroundColor = COLOR_GREY
    }
    dot_list[current_indice_path].style.backgroundColor = COLOR_BLACK
}

