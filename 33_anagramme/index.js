const mot_1 = 'créatif'
const mot_2 = 'réactif'

function alphabetic_order(mot) {
    mot.split('').sort().join('').replace('é', 'e')
}

function is_anagramme() {
    const mot_1_ordered = alphabetic_order(mot_1)
    const mot_2_ordered = alphabetic_order(mot_2)
    
    if (mot_1_ordered == mot_2_ordered) {
        console.log(`${mot_1} est bien un anagramme de ${mot_2}`);
    } else {
        console.log(`${mot_1} et ${mot_2} ne sont pas des anagrammes`);
    }
}

is_anagramme()