const ul = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.querySelector('form > input')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (input.value != '') {
        const value = input.value
        input.value = ''
        add_task(value)
        display_todo()
    }
})

const todos = []

function display_todo() {
    const todos_nodes = todos.map((todo, index) => {
        if (todo.edit_mode) {
            return edit_todo_node(todo)
        } else {
            return create_todo_node(todo, index)
        }
    })
    ul.innerHTML = ''
    ul.append(...todos_nodes)
    input.focus()
}

function create_todo_node(todo, index) {
    const li = document.createElement('li')

    const button_delete = document.createElement('button')
    button_delete.innerHTML = 'Supprimer'
    button_delete.addEventListener('click', event => {
        event.stopPropagation()
        delete_task(index)
    })

    const button_edit = document.createElement('button')
    button_edit.innerHTML = 'Editer'
    button_edit.addEventListener('click', event => {
        event.stopPropagation()
        toggle_edit(todo)
    })

    li.innerHTML = `
        <span class="todo ${ todo.done ? 'done' : ''}"></span>
        <p>${ todo.text }</p>
    `
    li.addEventListener('click', () => {
        toggle_done_task(index)
    })
    li.appendChild(button_edit)
    li.appendChild(button_delete)

    return li
}

function edit_todo_node(todo) {
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.type = 'text'
    input.value = todo.text

    const button_save = document.createElement('button')
    button_save.innerHTML = 'Save'
    button_save.addEventListener('click', () => {
        edit_task(todo, input)
    })

    const button_cancel = document.createElement('button')
    button_cancel.innerHTML = 'Cancel'
    button_cancel.addEventListener('click', () => {
        toggle_edit(todo)
    })

    li.append(input, button_save, button_cancel)
    return li
}

function add_task(text) {
    todos.push({
        text,
        done: false,
    })
}

function delete_task(index) {
    todos.splice(index, 1)
    display_todo()
}

function toggle_done_task(index) {
    todos[index].done = !todos[index].done
    display_todo()
}

function toggle_edit(todo) {
    todo.edit_mode = !todo.edit_mode
    display_todo()
}

function edit_task(todo, input) {
    const value = input.value
    todo.text = value
    todo.edit_mode = false
    display_todo()
}

display_todo()