const form = document.querySelector("form");
const errorElement = document.querySelector("#errors");
let errors = [];

form.addEventListener("submit", async event => {
    errors = []
    errorElement.innerHTML = ''
    event.preventDefault();
    const formData = new FormData(form);
    const article = Object.fromEntries(formData.entries());
    if (formIsValid(article)) {
        const json = JSON.stringify(article);
        // Nous ferons la requête ici !
    }
});

const formIsValid = article => {
    if (
        !article.author ||
        !article.category ||
        !article.content
    ) {
        errors.push("Vous devez renseigner tous les champs");
    }
    errorElement.innerHTML = [...errors]
};