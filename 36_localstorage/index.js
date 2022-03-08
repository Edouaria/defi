// STORE DATA TASK IN OBJECT
let obj = {
    'nom': 'edouard',
    'age': 37
}

// STORE EACH OBJECT IN ARRAY
obj_list = []
obj_list.push(obj)

// STORE ARRAY IN LOCALSTORAGE
localStorage.setItem('obj', JSON.stringify(obj_list))
console.log(JSON.parse(localStorage.getItem("obj")));

// GET ARRAY FROM LOCALSTORAGE
obj_list = JSON.parse(localStorage.getItem("obj"))

// MODIFY ONE OBJECT
obj_list[0].nom = 'toto'

// CREATE NEW OBJECT
new_obj = {
    'nom': 'Mario',
    'age': 43
}

// APPEND NEW OBJECT IN ARRAY
obj_list.push(new_obj)

// OVERWRITE LOCALESTORAGE WITH NEW ARRAY
localStorage.setItem('obj', JSON.stringify(obj_list))
console.log(JSON.parse(localStorage.getItem("obj")));