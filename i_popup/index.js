const container = document.getElementById("container")

popup = () => {
    container.classList.add("active")
}

close_button = () => {
    container.classList.remove("active")
}