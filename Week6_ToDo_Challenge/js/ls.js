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

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];
    
    if(todoListString) {
        todoList = JSON.parse(todoListString);
    } else if(todoList == undefined || todoList == null){
        // rids of the JSON undefined error if it occurs
        localStorage.clear();
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

export default {
    saveTodo,
    deleteTodo,
    getTodoList
}