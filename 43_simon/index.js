const divs = document.getElementsByClassName('my_btns')
const overlay = document.getElementsByClassName('overlay')
const num_essai = document.getElementById('num_essai')
const signals = document.getElementById('signals')

let results = signals.children
let code = []
let true_code = [random_color(), random_color(), random_color(), random_color()]
let count = 0
let button_is_active = false
let sequence_correct = true

const colors = ['rgb(50, 0, 10)', 'rgb(0, 50, 10)', 'rgb(0, 10, 50)', 'rgb(50, 50, 0)']
const light_colors = ['rgb(255, 0, 50)', 'rgb(0, 200, 50)', 'rgb(0, 50, 255)', 'rgb(250, 200, 50)']

const signal_colors = ['rgb(50, 0, 0)', 'rgb(0, 50, 0)']
const signal_light_colors = ['rgb(255, 0, 0)', 'rgb(0, 200, 0)']

divs[0].style.backgroundColor = colors[0]
divs[1].style.backgroundColor = colors[1]
divs[2].style.backgroundColor = colors[2]
divs[3].style.backgroundColor = colors[3]

function random_color() {
    return parseInt(Math.random() * divs.length)
}

function start() {
    // DELETE SIGNALS
    while (signals.firstChild) {
        signals.removeChild(signals.firstChild)
    }
    //  GENERATE NEW SIGNALS
    for (let i = 0; i < true_code.length; i++) {
        let result = document.createElement('div')
        result.className = 'result'
        if (i == true_code.length - 1) {
            result.style.backgroundColor = signal_colors[1]
        } else {
            result.style.backgroundColor = signal_colors[0]
        }
        signals.appendChild(result)
    }
    // IF USER INPUT IS CORRECT, LAUNCH THE NEW SEQUENCE
    if (sequence_correct) {
        launch_sequence()
    }
}

// RESET COLORS AFTER CURSOR LEAVE THE SQUARE
function reset_color() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = colors[i]
        divs[i].style.transform = 'scale(1)'
    }
}

function get_value(val) {
    if (button_is_active) {
        divs[val].style.backgroundColor = light_colors[val]
        divs[val].style.transform = 'scale(.9)'
        divs[val].style.transitionDuration = '.1s'
        count += 1
        code.push(val)
        // TURN ON THE SIGNALS AS USER INPUT GO ALONG
        for (let i = 0; i < results.length; i++) {
            if (i < count & i < results.length - 1) {
                results[i].style.backgroundColor = signal_light_colors[0]
            }
        }
        // IF SEQUENCE IS CORRECT
        if (code.toLocaleString() == true_code.toLocaleString()) {
            results[true_code.length - 1].style.backgroundColor = signal_light_colors[1]
            button_is_active = false
            sequence_correct = true
            true_code.push(random_color())
            setTimeout(() => {
                reset()
                launch_sequence()
            }, 1000)
        }
        // IF SEQUENCE IS WRONG
        if (code.length > true_code.length - 1 & code.toLocaleString() != true_code.toLocaleString()) {
            sequence_correct = false
            reset()
        }
    }
}

// RESTART SEQUENCE AFTER GOOD ANSWER
function reset() {
    start()
    code = []
    count = 0
}

// RESET GAME
function reset_complete() {
    true_code = [1, 0, 2]
    reset()
}

function launch_sequence() {
    let cnt = 0
    let prev_cnt = 0
    let msg = 'waiting'
    let anim = setInterval(() => {
        // WAIT THAT LIGHT TURN OFF BEFORE LIGHT TURN ON
        setTimeout(() => {
            // TURN OFF PREVIOUS COLORS
            divs[true_code[prev_cnt]].style.backgroundColor = colors[true_code[prev_cnt]]
            divs[true_code[prev_cnt]].style.transform = 'scale(1)'
            divs[true_code[prev_cnt]].style.transitionDuration = '.3s'
            prev_cnt = cnt
            msg = 'time is out'
        }, 300)
        if (msg == 'time is out') {
            // TURN ON CURRENT COLORS
            if (cnt < true_code.length) {
                divs[true_code[cnt]].style.backgroundColor = light_colors[true_code[cnt]]
                divs[true_code[cnt]].style.transform = 'scale(.9)'
                divs[true_code[cnt]].style.transitionDuration = '.3s'
            }
            msg = 'waiting'
            cnt += 1
        }
        // IF SEQUENCE IS FINISH
        if (cnt == true_code.length) {
            button_is_active = true
            clearInterval(anim)
        }
    }, 600)
}

start()
