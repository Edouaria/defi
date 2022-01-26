const list_img = document.getElementsByClassName('logo')
const list_puce = document.getElementsByClassName('puce')
let index = 0


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

function show(n) {
    list_img[index].classList.remove('active')
    list_puce[index].classList.remove('puce-active')
    index = n
    list_img[index].classList.add('active')
    list_puce[index].classList.add('puce-active')
}