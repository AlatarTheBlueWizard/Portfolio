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

function toggled(id) {
    const toDoList = getTodoList();

    toDoList.forEach(todo => {
        if(todo.id == id) {
            if(todo.completed) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        }
    });
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

function getTodoList() {
    const todoListString = localStorage.getItem('toDoList');
    let todoList = [];
    
    if(todoListString) {
        todoList = JSON.parse(todoListString);
        // count tasks to complete
        document.getElementById('count').innerText = todoList.filter(
            todo => todo.completed === false
        ).length;
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
    getTodoList,
    toggled
}