let count = 0
function divisible(num) {
    while (num % 2 == 0) {
        count += 1
        num = num / 2
    }
    console.log(`ce nombre est divisible ${count} fois par 2`);
}

