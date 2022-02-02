var switch_on = true

load_json = (url) => {
    fetch(url)
        .then(resp => resp.json())
        .then(data => appendData(data))
}

function appendData(data) {
    document.getElementById('title').innerHTML = data["title"];
    document.getElementById('button').innerHTML = data["button"];
    document.getElementById('description').innerHTML = data["description"]
    document.getElementById('home').innerHTML = data["home"]
    document.getElementById('features').innerHTML = data["features"]
    document.getElementById('contact').innerHTML = data["contact"]
}

function switch_lang() {
    switch_on = !switch_on
    if (switch_on == true) {
        load_json("./data_fr.json")
    } else {
        load_json("./data_en.json")
    }
}

load_json("./data_fr.json")