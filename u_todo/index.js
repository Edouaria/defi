const ul = document.querySelector('ul')

const todos = [
    {
        text: 'todo task',
        done: false
    },
    {
        text: 'todo task 2',
        done: true
    }
]

function display_todo() {
    const todos_nodes = todos.map((todo, index) => {
        return create_todo_node(todo, index)
    })
    ul.innerHTML = ''
    ul.append(...todos_nodes)
}

function create_todo_node(todo, index) {
    const li = document.createElement('li')
    li.innerHTML = `
        <span class="todo ${ todo.done ? 'done' : ''}"></span>
        <p>${ todo.text }</p>
        <button>Supprimer</button>
    `
    return li
}

display_todo()