function multiple(tab) {
    let res = 1
    for (let i in tab) {
        res *= tab[i]
    }
    console.log(res);
}

function multiple_method_2(num) {
    let res = 1
    for (let i = 1; i <= num; i++) {
        res *= i
    }
    console.log(res);
}

/////////////////// GET KEY VALAE ///////////////////////
// WITH OBJECT
const object = {
    'a': 1,
    'b': 2,
    'c': 3
}

function occurence() {
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            console.log(key, object[key])
        }
    }
}

// WITH MAP
const tab = ['Batou', 'Makoto', 'Toguza', 'Akira', 'Tetsuo', 'Lin']
function map_array() {
    tab.map((value, index) => {
        console.log("INDEX", index, "VALUE", value);
    })
}

// WITH CONSOLE.TABLE
function show_table() {
    console.table(tab)
}
/////////////////////////////////////////////////////////

/////////////////////// GET RANGE ///////////////////////
function get_range() {
    console.log("tableau original", tab);
    console.log("range entre 2 inclus et 5 exclus", tab.slice(2, 5));
}
/////////////////////////////////////////////////////////
