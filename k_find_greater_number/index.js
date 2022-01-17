// MA SUITE DE NOMBRE
const ma_list = [651041, 926030, 510359, 172306, 776864, 992008, 324938, 981900]
// LE RESULTAT TEMPORAIRE
let res = ma_list[0]

// MA FONCTION POUR TROUVER LE NOMBRE LE PLUS GRAND
function find_greater_number() {
    // JE BOUCLE SUR LES NOMBRES
    for (let i = 0; i < ma_list.length; i++) {
        // SI N EST PLUS PETIT QUE N+1 LE RESULTAT EST ÉGALE À N+1
        if (res < ma_list[i + 1]) {
            res = ma_list[i + 1]
        }
    }
    // AFFICHER LE RESULTAT
    console.log(res);
}

// LANCER LA FONCTION
find_greater_number()