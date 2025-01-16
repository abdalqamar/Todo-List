const addform = document.querySelector('.addform');
const inputTodo = document.querySelector('.inputTodo');
const todosList = document.querySelector('.todos');

// Load todos from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTodos);

addform.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = inputTodo.value.trim()
    if (input.length > 0) {
        addTodos(input);
        saveTodoToLocalStorage(input);
        inputTodo.value = ''
    } else {
        alert("There Is no Input To Add Todos")
    }

})

function addTodos(item) {
    const li = document.createElement('li');
    const span = document.createElement('span')
    span.textContent = item;
    const deletebtn = document.createElement('button')
    deletebtn.textContent = 'Delete';
    // deletebtn.addEventListener('click',() =>{
    //     li.remove();
    //     removeTodoFromLocalStorage(item)
    // })
    li.appendChild(span)
    li.appendChild(deletebtn);
    todosList.appendChild(li);
}

// Save Todo to localStorage
function saveTodoToLocalStorage(todo) {
    let todos = getTodosFromLocalStorage();
    todos.push(todo); // Add the new todo to the array
    localStorage.setItem('todos', JSON.stringify(todos)); // Save updated array to localStorage
};

// Get Todos from localStorage
function getTodosFromLocalStorage() {
    let todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : []; // Parse if data exists, otherwise return an empty array
}

// Load Todos from localStorage
function loadTodos() {
    let todos = getTodosFromLocalStorage();
    todos.forEach(todo => addTodos(todo)); // Add each todo to the DOM
}



todosList.addEventListener('click', (e) => {
    if (e.target.nodeName === "BUTTON") {
        const todoItem = e.target.previousElementSibling.textContent;
        e.target.parentElement.remove();
        removeTodoFromLocalStorage(todoItem);
    }

});



// Remove Todo from localStorage
function removeTodoFromLocalStorage(todo) {
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(t => t !== todo); // Remove the selected todo
    localStorage.setItem('todos', JSON.stringify(todos)); // Update localStorage
}

const searchInput = document.querySelector('.searchInput');

searchInput.addEventListener('keyup', () => {
    const searchText = searchInput.value.toLowerCase();
    const listItems = todosList.children;

    for (const li of listItems) {
        const todoText = li.querySelector('span').textContent.toLowerCase();
        if (todoText.includes(searchText)) {
            li.classList.remove('filtered')
        } else {
            li.classList.add('filtered')
        }
    }

});

