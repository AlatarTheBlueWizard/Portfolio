function activeFilter(todos) {
    return todos.filter(todo => {
        return todo.completed == false;
    })
}

function completedFilter(todos) {
    return todos.filter(todo => {
        return todo.completed == true;
    })
}

export default {
    activeFilter,
    completedFilter
}