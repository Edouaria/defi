// basic method with log //////////////
// fetch('./fichier.json')
//     .then(resp => resp.json())
//     .then(data => console.log(data))


// use DOM to show data //////////////////////////////////
fetch('./fichier.json')
    .then(resp => resp.json())
    .then(data => 
        document.querySelector('p').innerHTML = data.title
    )
