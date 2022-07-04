const divs = document.getElementsByClassName('my_btns')
const overlay = document.getElementsByClassName('overlay')
const num_essai = document.getElementById('num_essai')
const signals = document.getElementById('signals')
let code = []
let true_code = [2, 1, 3]
let count = 0

const colors = ['rgb(50, 0, 0)', 'rgb(0, 50, 0)', 'rgb(0, 0, 50)']
const light_colors = ['rgb(255, 0, 0)', 'rgb(0, 200, 0)', 'rgb(0, 0, 255)']

divs[0].style.backgroundColor = colors[0]
divs[1].style.backgroundColor = colors[1]
divs[2].style.backgroundColor = colors[2]


for (let i = 0; i < true_code.length; i++) {
    let result = document.createElement('div')
    result.className = 'result'
    if (i == true_code.length - 1) {
        result.style.backgroundColor = 'rgb(0, 50, 0)'
    } else {
        result.style.backgroundColor = 'rgb(50, 0, 0)'
    }
    signals.appendChild(result)
}
const results = document.getElementsByClassName('result')

function reset_color() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = colors[i]
    }
}

function show_me(val) {
    divs[val - 1].style.backgroundColor = light_colors[val - 1]
    divs[val - 1].style.transitionDuration = '.1s'
    count += 1
    code.push(val)

    for (let i = 0; i < results.length; i++) {
        if (i < count & i < results.length - 1) {
            results[i].style.backgroundColor = light_colors[0]
        }
    }

    if (code.toLocaleString() == true_code.toLocaleString()) {
        results[true_code.length - 1].style.backgroundColor = light_colors[1]
    }

    if (code.length > true_code.length - 1 & code.toLocaleString() != true_code.toLocaleString()) {
        reset()
    }
}

function reset() {
    for (let i = 0; i < true_code.length; i++) {
        if (i == true_code.length - 1) {
            results[i].style.backgroundColor = colors[1]
        } else {
            results[i].style.backgroundColor = colors[0]
        }
    }
    code = []
    count = 0
}

function launch_sequence() {
    let cnt = 0
    let prev_cnt = 0
    let anim = setInterval(() => {
        if (cnt > prev_cnt) {
            divs[true_code[prev_cnt]-1].style.backgroundColor = colors[true_code[prev_cnt]-1]
            divs[true_code[prev_cnt]-1].style.transform = 'scale(1)'
            divs[true_code[prev_cnt]-1].style.transitionDuration = '.3s'
        }
        prev_cnt = cnt

        if (cnt < true_code.length) {
            divs[true_code[cnt]-1].style.backgroundColor = light_colors[true_code[cnt]-1]
            divs[true_code[cnt]-1].style.transform = 'scale(.9)'
            divs[true_code[cnt]-1].style.transitionDuration = '.3s'
        }

        cnt += 1
        if (cnt > true_code.length) {
            divs[2].style.backgroundColor = colors[true_code[prev_cnt]-1]
            clearInterval(anim)
        }
    }, 700)
}

// launch_sequence()