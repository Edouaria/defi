const a = 1

const b = 1.1

const c = "1"

const d = (4 > 5)

const e = false

const f = ["3", 4]

const tata = {
    "name": "edouard",
    "pseudo": "tyrian",
    "toto": {
        "name": "edouard",
        "pseudo": "zoro",
        "favoris": ['jeux', 'martini', 'manga', {"tata": "Miranda"}]
    }
}

// Je récupère la valeur Miranda
console.log(tata.toto.favoris[3].tata);

const h = undefined

const i = null

// typeof permet de connaître la type de la variable
console.log(typeof(a));