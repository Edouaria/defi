const straight_line_with_2_arms = (ctx, ctx2, w, h, lnch, agl, arm1, arm2) => {
    ctx.clearRect(0, 0, w, h)
    arm1.angle = agl
    arm2.angle = - agl * 2
    arm2.x = arm1.getEndX()
    arm2.y = arm1.getEndY()
    arm1.render(ctx)
    arm2.render(ctx)

    if (lnch) {
        ctx2.beginPath()
        ctx2.moveTo(arm2.getEndX(), arm2.getEndY())
    }
    lnch = true
    ctx2.strokeStyle = 'rgba(0, 0, 0, 1)'
    ctx2.lineTo(arm2.getEndX(), arm2.getEndY())
    ctx2.stroke()
}

const cross_node = (agl, arm1, arm2, last_arm) => {
    console.log('cross_node animation !!')
    arm1.angle = Math.cos(agl)
    arm2.angle = agl * 2
    last_arm.angle = - agl * 4
}

const teardrop = (agl, arm1, arm2, last_arm) => {
    arm1.angle = Math.cos(agl)
    arm2.angle = agl
    last_arm.angle = - agl
}

const teardrop_2 = (agl, arm1, arm2, last_arm) => {
    arm1.angle = Math.sin(agl)
    arm2.angle = - agl
    last_arm.angle = agl
}
const teardrop_3 = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = Math.cos(agl)
    last_arm.angle = Math.cos(agl)
}

const teardrop_4 = (agl, arm1, arm2, last_arm) => {
    arm1.angle = Math.cos(agl)
    arm2.angle = agl
    last_arm.angle = Math.cos(agl)
}

const circle = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = - agl
    last_arm.angle = agl
}

const oeuf = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = -Math.cos(agl)
    last_arm.angle = Math.cos(agl)
}

const oeuf_grid = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = -Math.cos(agl)
    last_arm.angle = Math.cos(agl/.22)
}

const oeuf_fiber = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = -Math.cos(agl)
    last_arm.angle = Math.cos(agl*.22)
}

const straight_line = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = - agl
    last_arm.angle = -agl
}

const tetar = (agl, arm1, arm2, last_arm) => {
    arm1.angle = Math.cos(agl) / .25
    arm2.angle = agl
    last_arm.angle = Math.sin(agl)
}

const stockings = (agl, arm1, arm2, last_arm) => {
    arm1.angle = - agl
    arm2.angle = Math.cos(3.14 * agl)
    last_arm.angle = agl
}

const boomrang = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = - agl * 2
    last_arm.angle = agl / 2
}

const oval_shape = (agl, arm1, arm2, last_arm) => {
    arm1.angle = agl
    arm2.angle = - agl * 2
    last_arm.angle = agl * 2
}

const oval_shape_2 = (arm1, arm2, agl) => {
    arm1.angle = agl
    arm2.angle = - agl * 2
}