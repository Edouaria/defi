const container = document.getElementById('container')
const body = document.querySelector('body')
const joint_1 = document.getElementById('joint_1')
const joint_2 = document.getElementById('joint_2')
const pen = document.getElementById('pen')
let count = 0
let step = 0

const move_arm = () => {
    count += 1
    let pen_coord = pen.getBoundingClientRect()
    joint_1.style.transform = `translate(-50%, -50%) rotate(${count}deg)`
    joint_2.style.transform = `translate(-50%, -50%) rotate(${count/3}deg)`
    if (step == 5 & count < 1080) {
        const dot = document.createElement('div')
        dot.className = 'dot'
        // dot.style.transform = 'translate(-50%, -50%)'
        dot.style.top = `${parseInt(pen_coord.top + 10)}px`
        dot.style.left = `${parseInt(pen_coord.left + 10)}px`
        step = 0
        body.appendChild(dot)
    }
    step += 1
}

setInterval(() => {
    move_arm()
}, 1);