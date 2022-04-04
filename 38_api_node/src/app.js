const root = document.querySelector("#root")



fetch('http://localhost:4000')
    .then(resp => resp.json())
    .then(data => {
        root.insertAdjacentHTML('beforeend', data.title)
    })
