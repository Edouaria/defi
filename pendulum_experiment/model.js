const straight_line = (ctx, ctx2, w, h, lnch, agl, arm1, arm2) => {
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


const boomrang = (ctx, ctx2, w, h, lnch, agl, arm1, arm2, last_arm) => {
    if (lnch) {
        ctx2.beginPath()
        ctx2.moveTo(last_arm.getEndX(), last_arm.getEndY())
    }
    lnch = true

    ctx.clearRect(0, 0, w, h)
    arm1.angle = agl
    arm2.angle = - agl * 2
    last_arm.angle = agl / 2
    arm2.x = arm1.getEndX()
    arm2.y = arm1.getEndY()
    last_arm.x = arm2.getEndX()
    last_arm.y = arm2.getEndY()
    arm1.render(ctx)
    arm2.render(ctx)
    last_arm.render(ctx)
    
    ctx2.strokeStyle = 'rgba(0, 0, 0, .2)'
    ctx2.lineTo(last_arm.getEndX(), last_arm.getEndY())
    ctx2.stroke()
}

// CROSS NODE
// arm1.angle = Math.cos(agl)
// arm2.angle = agl * 2
// last_arm.angle = - agl * 4

// TEARDROP
// arm1.angle = Math.cos(agl)
// arm2.angle = agl
// last_arm.angle = - agl

// TEARDROP 2
// arm1.angle = Math.sin(agl)
// arm2.angle = - agl
// last_arm.angle = agl

// TEARDROP 3
// arm1.angle = agl
// arm2.angle = Math.cos(agl)
// last_arm.angle = Math.cos(agl)

// TEARDROP 4
// arm1.angle = Math.cos(agl)
// arm2.angle = agl
// last_arm.angle = Math.cos(agl)

// CIRCLE
// arm1.angle = agl
// arm2.angle = - agl
// last_arm.angle = agl

// ŒUF
// arm1.angle = agl
// arm2.angle = -Math.cos(agl)
// last_arm.angle = Math.cos(agl)

// ŒUF GRID
// arm1.angle = agl
// arm2.angle = -Math.cos(agl)
// last_arm.angle = Math.cos(agl/.22)

// ŒUF FIBER
// arm1.angle = agl
// arm2.angle = -Math.cos(agl)
// last_arm.angle = Math.cos(agl*.22)

// STRAIGHT LINE WITH 3 ARMS
// arm1.angle = agl
// arm2.angle = - agl
// last_arm.angle = -agl

// TETAR
// arm1.angle = Math.cos(agl) / .25
// arm2.angle = agl
// last_arm.angle = Math.sin(agl)

// STOCKINGS
// arm1.angle = - agl
// arm2.angle = Math.cos(3.14 * agl)
// last_arm.angle = agl

// BOOMRANG
// arm1.angle = agl
// arm2.angle = - agl * 2
// last_arm.angle = agl / 2

// OVAL SHAPE
// arm1.angle = agl
// arm2.angle = - agl * 2
// last_arm.angle = agl * 2

// OVAL SHAPE 2
// arm1.angle = agl
// arm2.angle = - agl * 2