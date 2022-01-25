const list_img = document.getElementsByClassName('logo')
let index_img = 0


function prev() {
    list_img[index_img].classList.remove('active')
    index_img -= 1
    if (index_img < 0) {
        index_img = list_img.length - 1
    }
    list_img[index_img].classList.add('active')
}

function next() {
    list_img[index_img].classList.remove('active')
    index_img += 1
    index_img %= list_img.length
    list_img[index_img].classList.add('active')
}