let res = []
function divisible_par(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            res.push(i)
        }
    }
    res == [] ? "Aucun ! ce nombre est premier" : console.log(`les divisiseurs de ${num} sont ${res}`);
    res = []
}

