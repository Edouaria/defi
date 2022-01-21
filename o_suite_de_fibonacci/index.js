let total = []
let res = 0
function fibonacci(sequence) {
    for (let i = 0; i <= sequence; i++) {
        if (i < sequence) {
            res = (res + (i + 1))
            total.push(res)
        }
    }
    console.log(total)
}