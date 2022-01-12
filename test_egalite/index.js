function toto() {
    if (+'' === 0) {
        console.log("+'' === 0");
    }
    if (+[] === 0) {
        console.log("+[] === 0");
    }
    if (+[5] === 5) {
        console.log("+[5] === 5");
    }
    if (+['5'] === 5) {
        console.log("+['5'] === 5");
    }
}

toto()
