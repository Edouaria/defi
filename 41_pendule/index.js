const body = document.querySelector('body')
const joint_1 = document.getElementById('joint_1')
const joint_2 = document.getElementById('joint_2')
const pen = document.getElementById('pen')
const speed_arm_1 = document.getElementById('speed_arm_1')
const speed_arm_2 = document.getElementById('speed_arm_2')
let count = 0
let step = 0
let speed_1 = 3
let speed_2 = 2

// const remove_childs = () => {
//     let childs = body.getElementsByClassName('dot')
//     const _childs = Array.from(childs)
//     for (const child of _childs) {
//         body.removeChild(child)
//     }
//     step = 0
//     count = 0
//     console.log('childs', childs);
// }

// speed_arm_1.onclick = () => {
//     speed_1 += 1
//     speed_1 %= 3
//     speed_arm_1.innerText = `speed arm 1 = ${speed_1 + 1}`
//     remove_childs()
// }

// speed_arm_2.onclick = () => {
//     speed_2 += 1
//     speed_2 %= 3
//     speed_arm_2.innerText = `speed arm 2 = ${speed_2 + 1}`
//     remove_childs()
// }

const move_arm = () => {
    count += 1
    let pen_coord = pen.getBoundingClientRect()
    joint_1.style.transform = `translate(-50%, -50%) rotate(${count / (speed_1 + 1)}deg)`
    joint_2.style.transform = `translate(-50%, -50%) rotate(${count / (speed_2 + 1)}deg)`
    if (step == 5 & count < 4380) {
        const dot = document.createElement('div')
        dot.className = 'dot'
        // dot.style.transform = 'translate(-50%, -50%)'
        dot.style.top = `${parseInt(pen_coord.top + 10)}px`
        dot.style.left = `${parseInt(pen_coord.left + 10)}px`
        body.appendChild(dot)
        step = 0
    }
    step += 1
}



setInterval(() => {
    move_arm()
}, 1)