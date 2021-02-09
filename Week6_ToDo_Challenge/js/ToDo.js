import utils from './utils.js';
import ls from './ls.js';

// Load the list
loadTodos();

// Add event listener
document.querySelector('#addBtn').onclick = newTodo;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

// Step 1
function newTodo() {
    const todo = createTodo();
    const todoDiv = createTodoElement(todo);
    addToList(todoDiv);
    ls.saveTodo(todo);
}

// Step 2
function createTodo() {
    const input = document.querySelector('#todoInput');
    const newTodo = {id: Date.now(), content: input.value, completed: false};
    input.value = '';
    return newTodo;
}

// Step 3
function createTodoElement(todo) {
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete btn
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');

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

// Step 4
function addToList(todoDiv) {
    // Add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

// Step 0
function loadTodos() {
    const todoList = ls.getTodoList();

    todoList.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    });
}

// Event handlers
function deleteTodo(e) {
    const btn = e.currentTarget;
    ls.deleteTodo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadTodos();
}

function toggleComplete(e) {

}

function applyFilter(e) {
    // Clear the list
    document.querySelector('#todos').innerHTML = '';

    // Declare variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // Check which filter applies
    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos);
    } else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos;
    }

    // Draw the list
    filteredTodos.forEach(todo => {
        const el = createTodoElement(todo);
        addToList(el);
    });
}