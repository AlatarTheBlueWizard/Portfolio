function saveTodo(todo) {
    const toDoList = getTodoList();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function deleteTodo(id) {
    const toDoList = getTodoList();

    const updatedTodos = toDoList.filter(todo => todo.id != id)
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

function toggleComplete(id) {

}

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if(todoListString) {
        todoList = JSON.parse(todoListString);
    } else {
        // rids of the JSON undefined error if it occurs
        localStorage.clear();
    }

    return todoList;
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList,
    toggleComplete
}