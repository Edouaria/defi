let list_num = []
let verify_list_num = []

const random_num = () => {
    return parseInt(Math.random() * 500)
}

const gen_list_num = () => {
    for (let i = 0; i < 100; i++) {
        list_num.push(random_num())
    }
    return list_num
}

const gen_verify_list_num = () => {
    for (const el of list_num) {
        if (!verify_list_num.includes(el)) {
            verify_list_num.push(el)
        }
    }
}

const show_result = () => {
    gen_list_num()
    gen_verify_list_num()
    console.log('list de départ:', list_num)
    console.log('list sans doublons:', list_num)
    if (list_num.length != verify_list_num.length) {
        console.log(`Il y a ${list_num.length - verify_list_num.length} doublons dans la liste de départ.`)
    } else {
        console.log('Il n\'y a pas de doublons dans la liste de départ.')
    }
    list_num = []
    verify_list_num = []
}

show_result()