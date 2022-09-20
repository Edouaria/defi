let count = 0
let data = [true, true, true, true, true]

function loop() {
    for (let i = 0; i < 2; i++) {
        data[0] = !data[0]
        for (let j = 0; j < 2; j++) {
            data[1] = !data[1]
            for (let k = 0; k < 2; k++) {
                data[2] = !data[2]
                for (let l = 0; l < 2; l++) {
                    data[3] = !data[3]
                    for (let m = 0; m < 2; m++) {
                        data[4] = !data[4]
                        console.log(data)
                        count += 1
                    }
                }
            }
        }
    }
    console.log(count)
}
// loop()

let _count = 0
let _data = [true, true, true, true, true]
// RECURSIVE WAY
function recursive_loop(num) {
    while (_count < num) {
        for (let i = 0; i < 2; i++) {
            _data[_count] = !_data[_count]
            console.log(_data)
        }
        if (_count == num-1) {
            console.log('DATA', _data)
        }
        _count += 1
    }
}

console.log(recursive_loop(5))