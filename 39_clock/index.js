const hour = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const dots = document.querySelector('.dots')


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
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
    // ms = date.getMilliseconds()
    // let mls = Math.ceil(parseInt(ms.toString().padEnd(3, "0")) / 100)
    hour.style.transform = `translate(-50%, -100%) rotate(${h * 360 / 12 + m * 30 / 60}deg)`
    min.style.transform = `translate(-50%, -100%) rotate(${m * 360 / 60 + s * 6 / 60}deg)`
    sec.style.transform = `translate(-50%, -100%) rotate(${s * 360 / 60}deg)`
    hour.innerHTML = `<p style='position: absolute; top: -100px; left: -50%; transform: rotate(${-h * 360 / 12 + -m * 30 / 60}deg)'>${h}</p>`
    min.innerHTML = `<p style='position: absolute; top: -110px; left: -50%; transform: rotate(${-m * 360 / 60 + -s * 6 / 60}deg)'>${m}</p>`
    sec.innerHTML = `<p style='position: absolute; top: -120px; left: -50%; margin: Opx; transform: rotate(${-s * 360 / 60}deg)'>${s}</p>`
}

rotate_hour()
setInterval(rotate_hour, 1000)