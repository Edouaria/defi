const container = document.getElementById('container')
const side_button = document.getElementById('side_button')
const reset = document.createElement('button')
reset.innerText = 'RESET'
reset.id = 'reset'
reset.addEventListener('click', reset_game)

const perso_img = container.children

// PERSO TO GUESS
let current_details = {
    "lunette": null,
    "moustache": null,
    "deux yeux": null,
    "cigare": null,
    "cheveux": null
}

// GEN MY BUTTONS YES OR NO
for (const detail in current_details) {
    let box = document.createElement('div')
    box.style.display = 'flex'
    box.style.justifyContent = 'flex-end'
    let label = document.createElement('div')
    label.style.display = 'inline'
    label.style.margin = 'auto'
    let yes_button = document.createElement('button')
    yes_button.innerText = 'YES'
    yes_button.addEventListener('click', () => {
        current_details[detail] = true
        check_remaining_perso()
        yes_button.style.backgroundColor = 'green'
        no_button.style.backgroundColor = 'white'
    })
    let no_button = document.createElement('button')
    no_button.innerText = 'NO'
    no_button.addEventListener('click', () => {
        current_details[detail] = false
        check_remaining_perso()
        no_button.style.backgroundColor = 'red'
        yes_button.style.backgroundColor = 'white'
    })
    yes_button.className = no_button.className = 'white_buttons'
    label.innerText = detail
    box.append(label, yes_button, no_button)
    side_button.appendChild(box)
}
side_button.appendChild(reset)

// GEN MY PERSOS

for (let perso in persos) {
    let bonhommes = document.createElement('img')
    bonhommes.className = 'bonhomme'
    bonhommes.src = persos[perso].img_src
    bonhommes.slot = persos[perso].slot
    container.appendChild(bonhommes)
}

let tab_perso = []
let tab_secret_perso = []
// MATCH CURRENT DETAILS WITH PERSOS DETAILS
// FOR EACH PERSO
function check_remaining_perso() {
    for (const perso in persos) {
        // FOR EACH DETAIL
        for (const detail in current_details) {
            if (current_details[detail] == null) {
                tab_secret_perso.push(persos[perso].details[detail])
            } else {
                tab_secret_perso.push(current_details[detail])
            }
            tab_perso.push(persos[perso].details[detail])
        }
        // console.log(tab_perso.toLocaleString(), tab_secret_perso.toLocaleString())
        if (tab_perso.toLocaleString() != tab_secret_perso.toLocaleString()) {
            perso_img[Math.round(persos[perso].slot)].style.opacity = '.5'
            perso_img[Math.round(persos[perso].slot)].style.filter = 'sepia()'
        } else {
            perso_img[Math.round(persos[perso].slot)].style.opacity = '1'
            perso_img[Math.round(persos[perso].slot)].style.filter = 'initial'
        }
        tab_perso = []
        tab_secret_perso = []
    }
}

function reset_game() {
    current_details = {
        "lunette": null,
        "moustache": null,
        "deux yeux": null,
        "cigare": null,
        "cheveux": null
    }
    for (const button of document.getElementsByClassName('white_buttons')) {
        button.style.backgroundColor = 'white'
    }
    check_remaining_perso()
}

// function random_bool() {
//     return Math.round(Math.random() * 1)
// }
// function gen_tab() {
//     return [random_bool(), random_bool(), random_bool(), random_bool(), random_bool()]
// }