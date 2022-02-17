const alice = ['Ⅱ', 'Ⅳ', 'Ⅱ', 'ⅩⅠⅩ', 'ⅩⅤ', 'Ⅳ', 'Ⅲ']
const bob = ['Ⅳ', 'Ⅲ', 'Ⅱ', 'ⅩⅩ', 'Ⅱ', 'ⅩⅩ']
const silvester = ['ⅩVⅢ', 'ⅩⅠⅩ', 'Ⅲ', 'Ⅰ', 'Ⅲ', 'ⅩVⅢ']

const love_meet = () => {
    let res = []
    for (const a_dep of alice) {
        for (const b_dep of bob) {
            if (a_dep == b_dep & !res.includes(a_dep)) {
                res.push(a_dep);
            }
        }
    }
    return res
}

console.log('love_meet ', ...love_meet());


const affair_meet = () => {
    const res = love_meet()
    for (const s_dep of silvester) {
        if (!res.includes(s_dep) & alice.includes(s_dep)) {
            console.log('affair_meet ', s_dep);
        }
    }
}

affair_meet()

function love_meet_2() {
    let res = []
    alice.map(element => {
        if (bob.includes(element) & !res.includes(element)) {
            res.push(element)
        }
    })
    console.log('res', ...res);
    
}

// love_meet_2()