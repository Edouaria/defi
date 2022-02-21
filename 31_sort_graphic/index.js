const container = document.querySelector('#container')
const name_button = document.querySelector('#name')
const age_button = document.querySelector('#age')
let toggle_name = false
let toggle_age = false

const obj = [
    {
        'name': 'Fany',
        'age': 37
    },
    {
        'name': 'Ar-Ha',
        'age': 23
    },
    {
        'name': 'Daphnée',
        'age': 35
    },
    {
        'name': 'Bo-Kyung',
        'age': 39
    }
]

let nodes_to_be_removed = []

function show_elements(obj) {
    nodes_to_be_removed.map(el => container.removeChild(el))
    nodes_to_be_removed = []
    obj.map(el => {
        const row = document.createElement('p')
        nodes_to_be_removed.push(row)
        row.innerText = el.name + " " + el.age
        container.appendChild(row)
    })
}

show_elements(obj)

name_button.addEventListener('click', () => {
    toggle_name = !toggle_name
    sort_elements_by_name()
})

age_button.addEventListener('click', () => {
    toggle_age = !toggle_age
    sort_elements_by_age()
})

function sort_elements_by_name() {
    if (toggle_name) {
        const sorted = obj.sort((a, b) => a.name.localeCompare(b.name))
        show_elements(sorted)
    } else {
        const sorted = obj.sort((a, b) => b.name.localeCompare(a.name))
        show_elements(sorted)
    }
}

function sort_elements_by_age() {
    if (toggle_age) {
        const sorted = obj.sort((a, b) => a.age - b.age)
        show_elements(sorted)
    } else {
        const sorted = obj.sort((a, b) => b.age - a.age)
        show_elements(sorted)
    }
}