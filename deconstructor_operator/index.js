let tableau = [1, 2, 3, 4]
let new_tableau = [5, 6]

function push_tab() {
    tableau.push(new_tableau)
    return tableau
}

function push_decomposition_tab() {
    tableau.push(...new_tableau)
    return tableau
}

function clear_tab() {
    tableau = [1, 2, 3, 4]
}
