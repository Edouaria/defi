const input_1 = document.getElementById("input_1")
const input_2 = document.getElementById("input_2")
const result = document.getElementById("result")

add = () => {
    result.innerHTML = parseInt(input_1.value) + parseInt(input_2.value)
}

substract = () => {
    result.innerHTML = input_1.value - input_2.value
}