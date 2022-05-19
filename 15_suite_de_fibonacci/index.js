// 01...
// ABC

let preprev = 0
let prev = 1
let res = 0

function fibonacci(sequence) {
    for (let i = 0; i <= sequence; i++) {
        res = preprev + prev
        preprev = prev
        prev = res
        console.log(res);
    }
    preprev = 0
    prev = 1
}