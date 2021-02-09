function saveTodo(todo) {
    const todoList = getTodoList();

    todoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(todoList)); 
}

function deleteTodo(id) {
    const todoList = getTodoList();

    const updatedTodos = todoList.filter(todo => todo.id != id);
    localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
}

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];

    if(todoListString) {
        JSON.parse(todoListString);
    }

    return todoList;
}

export default {
    saveTodo,
    getTodoList,
    deleteTodo
}