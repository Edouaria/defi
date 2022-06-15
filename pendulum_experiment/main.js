let canvas = document.getElementById('arm_canvas')
    canvas_2 = document.getElementById('draw_canvas'),
    context = canvas.getContext('2d'),
    context_2 = canvas_2.getContext('2d'),
    width = canvas.width = canvas_2.width = window.innerWidth,
    height = canvas.height = canvas_2.height = window.innerHeight


let arm = Arm.create(width / 2, height / 2, 100, 0),
    arm_2 = Arm.create(arm.getEndX(), arm.getEndY(), 100, 0),
    arm_3 = Arm.create(arm_2.getEndX(), arm_2.getEndY(), 100, 0),
    angle = 0,
    launch = false

arm_2.parent = arm
arm_3.parent = arm_2

function update() {
    // straight_line(context, context_2, width, height, launch, angle, arm, arm_2)
    boomrang(context, context_2, width, height, launch, angle, arm, arm_2, arm_3, update)
    
    angle += .05
    requestAnimationFrame(update)
}

// const Main = {

// }

window.onload = function() {
    update()   
}