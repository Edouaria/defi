const body = document.querySelector('body')
const joints = document.getElementsByClassName('joint')
const arms = document.getElementsByClassName('arm')
const pen = document.getElementById('pen')
const speed_arm_1 = document.getElementById('speed_arm_1')
const speed_arm_2 = document.getElementById('speed_arm_2')
let count = 0
let step = 0
let speed_1 = 2
let speed_2 = 4
let speed_3 = 3
let _continue = true

const move_arm = () => {
    count += 2
    let pen_coord = pen.getBoundingClientRect()
    joints[0].style.transform = `translate(-50%, -50%) rotate(${count / (speed_1 + 1)}deg)`
    joints[1].style.transform = `translate(-50%, -50%) rotate(${count / (speed_2 + 1)}deg)`
    joints[2].style.transform = `translate(-50%, -50%) rotate(-${count / (speed_3 + 1)}deg)`
    arms[2].style.width = `${count % 50 + 50}px`
    if (step == 5 & count < 21605) {
        const dot = document.createElement('div')
        dot.className = 'dot'
        // dot.style.transform = 'translate(-50%, -50%)'
        dot.style.top = `${parseInt(pen_coord.top + 10)}px`
        dot.style.left = `${parseInt(pen_coord.left + 10)}px`
        body.appendChild(dot)
        step = 0
    }
    step += 1
    if (count > 21605 & _continue) {
        arms[0].classList.add('arm_disappear')
        arms[1].classList.add('arm_disappear')
        arms[2].classList.add('arm_disappear')
        _continue = false
    }
}

setInterval(() => {
    move_arm()
}, 1)
