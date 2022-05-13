const hour = document.getElementsByClassName('hour')
const min = document.getElementsByClassName('min')
const sec = document.getElementsByClassName('sec')
dots = document.querySelector('.dots')

const display_dots = () => {
    let count = 0
    for (let i = 0; i < 360; i += 6) {
        const dot = document.createElement('div')
        dot.className = 'dot'
        if (count >= 5) {
            dot.classList.add('big_dot')
            count = 0
        }
        count += 1
        let radian = i * (Math.PI/180)
        let x = Math.cos(radian) * 190
        let y = Math.sin(radian) * 190
        dot.style.left = `${x}px`
        dot.style.top = `${y}px`
        dots.appendChild(dot)
    }
    document.getElementsByClassName('dot')[0].classList.add('big_dot')
}

display_dots()

const rotate_hour = () => {
    let date = new Date()
    h = date.getHours()
    m = date.getMinutes()
    s = date.getSeconds()
    hour[0].style.transform = `translate(-50%, -100%) rotate(${h * 360 / 12 + m * 30 / 60}deg)`
    min[0].style.transform = `translate(-50%, -100%) rotate(${m * 360 / 60  + s * 6 / 60}deg)`
    sec[0].style.transform = `translate(-50%, -100%) rotate(${s * 360 / 60}deg)`
}

rotate_hour()
setInterval(rotate_hour, 1000)