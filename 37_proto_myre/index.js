const button = document.querySelector('#submit')
const name_input = document.querySelector('input[name="name_input"]')
const pwd_input = document.querySelector('input[name="pwd_input"]')
const p = document.querySelector('#error')

button.addEventListener('click', function(e) {
    e.preventDefault()
    login()
})

function login() {
    if ( name_input.value == data.name & pwd_input.value == data.pwd ) {
        location.replace("./profil.html");
    } else {
        p.textContent = 'User name or password not valid'
        p.style.color = 'red'
    }
}