const ul = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.querySelector('form > input')
let todos = []

localStorage.length != 0 ? todos = JSON.parse(localStorage.getItem('todos')) : ""

// CHECK FORMULAR
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // CHECK IF FIELD IS NOT EMPTY
    if (input.value != '') {
        const value = input.value
        input.value = ''
        // ADD A NEW TASK
        add_task(value)
        // DISPLAY TASK LIST
        display_todo()
    }
})

// DISPLAY TASK LIST
function display_todo() {
    // FOR EVERY TASK OBJECT, CHECK EDIT MODE
    const todos_nodes = todos.map((todo, index) => {
        if (todo.edit_mode) {
            return edit_todo_node(todo, index)
        } else {
            return create_todo_node(todo, index)
        }
    })

    // CLEAR TASK LIST
    ul.innerHTML = ''
    // ASSIGN A NEW TASK LIST
    ul.append(...todos_nodes)
    // FOCUS ON THE INPUT
    input.focus()
}

// CREATE A NEW TASK
function create_todo_node(todo, index) {

    // CLEATE LIST TAG
    const li = document.createElement('li')

    // CREATE BUTTON DELETE
    const button_delete = document.createElement('button')
    button_delete.innerHTML = 'Delete'
    // ADD EVENT TO BUTTON DELETE
    button_delete.addEventListener('click', event => {
        event.stopPropagation()
        delete_task(index)
    })

    // CREATE BUTTON EDIT
    const button_edit = document.createElement('button')
    button_edit.innerHTML = 'Edit'
    // ADD EVENT TO BUTTON EDIT
    button_edit.addEventListener('click', event => {
        event.stopPropagation()
        toggle_edit(todo)
    })
    // ADD LABEL TO TASK AND CHECK IF TASK IS DONE
    li.innerHTML = `
        <span class="todo ${ todo.done ? 'done' : ''}"></span>
        <p>${ todo.text }</p>
    `
    // ADD EVENT ON LI TAG TO TOGGLE DONE TASK
    li.addEventListener('click', () => {
        toggle_done_task(index)
    })
    // ADD BUTTON TO LIST TAG
    li.appendChild(button_edit)
    li.appendChild(button_delete)
    return li
}

// EDIT TASK
function edit_todo_node(todo, index) {

    // CREATE LIST TAG
    const li = document.createElement('li')
    // CREATE INPUT
    const input = document.createElement('input')
    input.type = 'text'
    input.value = todo.text

    // CREATE BUTTON SAVE
    const button_save = document.createElement('button')
    button_save.innerHTML = 'Save'
    // ADD EVENT TO BUTTON SAVE
    button_save.addEventListener('click', () => {
        edit_task(index, input)
    })

    // CREATE BUTTON CANCEL
    const button_cancel = document.createElement('button')
    button_cancel.innerHTML = 'Cancel'
    // ADD EVENT TO BUTTON CANCEL
    button_cancel.addEventListener('click', () => {
        toggle_edit(todo)
    })

    // ADD BUTTON TO LIST TAG
    li.append(input, button_save, button_cancel)
    return li
}

// ADD TASK PROPERTY
function add_task(text) {
    todos.push({
        text,
        done: false,
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}

// DELETE TASK PROPERTY
function delete_task(index) {
    todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(todos))
    display_todo()
}

// TOGGLE DONE TASK
function toggle_done_task(index) {
    todos[index].done = !todos[index].done
    localStorage.setItem("todos", JSON.stringify(todos))
    display_todo()
}

// TOGGLE EDIT MODE
function toggle_edit(todo) {
    todo.edit_mode = !todo.edit_mode
    display_todo()
}

// EDIT TASK PROPERTY
function edit_task(index, input) {
    const value = input.value
    todos[index].text = value
    todos[index].edit_mode = false
    localStorage.setItem("todos", JSON.stringify(todos))
    display_todo()
}

// DISPLAY TODO LIST BY DEFAULT
display_todo()