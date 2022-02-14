const flavors = [
    "Banane",
    "Chocolat",
    "Citron",
    "Pistache",
    "Framboise",
    "Fraise",
    "Vanille",
]

//////////// METHOD 1 //////////////
function generator_menu() {
    let menu = []
    for (first_flavor of flavors) {
        for (second_flavor of flavors) {
            if (first_flavor != second_flavor && !menu.includes(second_flavor + " " + first_flavor)) {
                menu.push(first_flavor + " " + second_flavor);
            }
        }
    }
    console.log(menu);
}

// generator_menu()

//////////// METHOD 2 //////////////
function generator_menu_2() {
    let duos = flavors.flatMap(
        (v, i) => flavors.slice(i + 1).map(w => v + ' ' + w)
    );
    console.log(duos);
}

// generator_menu_2()

//////////// METHOD 3 //////////////
function generator_menu_3() {
    for (let a = 0; a < flavors.length; a++) {
        for (let b = a+1; b < flavors.length; b++) {
            console.log(flavors[a], flavors[b]);
        }
    }
}

generator_menu_3()