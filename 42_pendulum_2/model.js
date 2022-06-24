const shape_list = {
    "cross_node": cross_node,
    "teardrop": teardrop,
    "teardrop_2": teardrop_2,
    "teardrop_3": teardrop_3,
    "teardrop_4": teardrop_4,
    "circle": circle,
    "oeuf": oeuf,
    "oeuf_grid": oeuf_grid,
    "oeuf_fiber": oeuf_fiber,
    "straight_line": straight_line,
    "tetar": tetar,
    "stockings": stockings,
    "boomrang": boomrang,
    "oval_shape": oval_shape,
    // "oval_shape_2": oval_shape_2,
}
let current_shape = "cross_node"

const change_shape = (msg) => {
    current_shape = msg
    reset = true
}

const draw_it = (ctx, ctx2, w, h, lnch, agl, arm1, arm2, last_arm) => {
    if (lnch) {
        ctx2.beginPath()
        ctx2.moveTo(last_arm.getEndX(), last_arm.getEndY())
    }
    lnch = true

    ctx.clearRect(0, 0, w, h)
    ctx2.clearRect(0, 0, w, h)
    shape_list[current_shape](agl, arm1, arm2, last_arm)
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