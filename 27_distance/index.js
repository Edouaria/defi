const num_list = [3, 5, 8.4, 7, 2.3]

function dist() {
    const min = Math.min(...num_list)
    const max = Math.max(...num_list)
    const distance = max - min
    console.log(`la distance la plus longue possible entre chaqune de ces valeurs est ${distance}`);
}
