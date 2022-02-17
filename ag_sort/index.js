// SORT A LIST
function sort_a_list() {
    const ma_list = [1, 3, 2, 4, 6, 5, 9, 7, 8, 100]
    const sorted_list = ma_list.sort((a, b) => {
        return b - a
    })
    console.log('sort_a_list ', sorted_list);
}

sort_a_list()

// SORT BY MARK
function sort_by_mark() {
    const ma_list_de_pair = [[85, 'Susan Maddox'], [6, 'Joshua Tran'], [150, 'John Arber'], [37, 'Jeanette Wafer']]
    const sorted_list = ma_list_de_pair.sort((a, b) => {
        return b[0] - a[0]
    })
    console.log('sort_by_mark ', sorted_list);
}

sort_by_mark()

// SORT BY NAME
function sort_by_name() {
    const ma_list_de_pair = [[150, 'John Arber'], [85, 'Susan Maddox'], [6, 'Joshua Tran'], [37, 'Jeanette Wafer']]
    sorted_list = ma_list_de_pair.sort((a, b) => {
        return a[1].localeCompare(b[1])
    })
    console.log('sort_by_name ', sorted_list);
}

sort_by_name()