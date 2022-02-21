const list_img = document.getElementsByClassName('logo')
const list_puce = document.getElementsByClassName('puce')
let interval_init = -1
let index = 0

// CLICK ONCE TO SEE NEXT IMAGE
function next(n) {
    list_img[index].classList.remove('active')
    list_puce[index].classList.remove('puce-active')
    index += n
    if (index < 0) {
        index = list_img.length - 1
    }
    index %= list_img.length
    list_img[index].classList.add('active')
    list_puce[index].classList.add('puce-active')
}

// CLICK ON BULLET LIST TE SEE IMAGE
function show(n) {
    list_img[index].classList.remove('active')
    list_puce[index].classList.remove('puce-active')
    index = n
    list_img[index].classList.add('active')
    list_puce[index].classList.add('puce-active')
}

// KEEP MOUSE DOWN TO SCROLL AUTOMATIC ///////////
function mouse_down(n) {
    if (interval_init == -1) {
        interval_init = setInterval(() => {
            next(n)
        }, 100)
    }
}

function mouse_up() {
    if (interval_init != -1) {
        clearInterval(interval_init)
        interval_init = -1
    }
}
//////////////////////////////////////////////////