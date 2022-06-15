const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width = window.outerWidth - 10
const height = canvas.height = window.outerHeight - 200
const rect_size = 50
const rect_pos_x = width / 2 - rect_size / 2
const rect_pos_y = height / 2 - rect_size / 2
let angle = 0

const draw = (a=0, b=0, color='red') => {
    angle += 2
    ctx.save()
    ctx.fillStyle = color
    ctx.translate(rect_pos_x + a, rect_pos_y + b)
    ctx.rotate(angle * Math.PI / 360)
    ctx.fillRect(-rect_size / 2, -rect_size / 2, rect_size, rect_size)
    ctx.restore()
}

const toto = () => {
    draw()
    draw(50, 50, 'blue')
}

const animate = () => {
    ctx.clearRect(0, 0, width, height)
    toto()
    requestAnimationFrame(animate)
}

animate()