const mon_input = document.getElementById('mon_input')
const result = document.getElementById('result')
function calcul() {
    result.innerHTML = `pour un rayon de ${mon_input.value} le périmètre est de ${mon_input.value * 2 * Math.PI}` 
}