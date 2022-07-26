const body = document.body
let color_value = 50

function snow() {
    let ratio = Math.random() * 7 + 1
    let snow = document.createElement('div')
    snow.className = 'snow'
    snow.style.width = ratio * 2 + 'px'
    snow.style.height = ratio * 2 + 'px'
    snow.style.left = Math.random() * window.innerWidth + 'px'
    snow.style.animationDuration = 15 / ratio + 's'
    snow.style.backgroundColor = `rgb(${color_value * ratio}, ${color_value * ratio}, ${color_value * ratio})`
    snow.style.filter = `blur(${10 / ratio}px)`
    body.appendChild(snow)
    setTimeout(() => {
        snow.remove()
        // snow.style.top = '850px'
    },  15 / ratio * 1000)
}

setInterval(snow, 50)