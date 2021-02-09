function activeFilter(todos) {
    return todos.filter(todo => {
        return !todo.completed
    });
}

function toggleComplete(todos) {

}

export default {
    activeFilter,
    toggleComplete
}