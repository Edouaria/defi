console.log('my script is working !!')

const div_1 = document.getElementById('div_1')
const div_2= document.getElementById('div_2')
const div_3 = document.getElementById('div_3')

function do_something() {
	console.log(window.scrollY)
	if (window.scrollY >= 69) {
		div_1.style.bottom = '240px'
	} else {
		div_1.style.bottom = '200px'
	}

	if (window.scrollY >= 138) {
		div_2.style.bottom = '220px'
	} else {
		div_2.style.bottom = '180px'
	}

	if (window.scrollY >= 207) {
		div_3.style.bottom = '200px'
	} else {
		div_3.style.bottom = '160px'
	}
}

document.addEventListener('scroll', () => {
	do_something()
})
