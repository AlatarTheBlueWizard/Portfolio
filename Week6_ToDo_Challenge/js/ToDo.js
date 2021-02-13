import utils from './utils.js';
import ls from './ls.js';

// load the list
localStorage.clear();
loadTodos();

// Add event listener
document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, completed: false}
    input.value = '';
    return newTodo;
}

function createTodoElement(todo) {
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete button
    const completeBtn = document.createElement('button');
    completeBtn.setAttribute('data-id', todo.id)
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = "&#10003";
    completeBtn.onclick = toggleComplete;

    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // delete btn
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('todo-delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteTodo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos() {
    const todoList = ls.getTodoList();

    todoList.forEach(element => {
        const el = createTodoElement(element)
        addToList(el);
    })
}

function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function toggleComplete(e) {
    const btn = e.currentTarget;
    ls.toggleComplete(btn.getAttribute('data-id'));
}

function applyFilter(e) {
    // clear the list
    document.querySelector('#todos').innerHTML = '';

    // declare vars
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // check which filter to apply
    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos)
    } else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos
    } else if (e.currentTarget.id == 'completedFilter') {
        filteredTodos = utils.completedFilter(allTodos)
    }

    // draw the list
    filteredTodos.forEach(todo => {
        const el = createTodoElement(todo)
        addToList(el);
    })
}