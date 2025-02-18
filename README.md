# Todo-List

Here are the key features of the Todo:



1. Todo List Creation and Management

Users can add items to a todo list via an input form.

The list is displayed dynamically in the DOM using <li> elements inside a parent <ul> .


2. LocalStorage Integration

Persistent Data Storage:

Todos are saved to localStorage when added.

Todos are loaded from localStorage on page load, ensuring persistence across browser sessions.


CRUD Operations on LocalStorage:

Save new todos (saveTodoToLocalStorage).

Retrieve todos (getTodosFromLocalStorage).

Remove todos from storage (removeTodoFromLocalStorage).



3. Todo Deletion

Users can delete individual todos using a "Delete" button.

When a todo is deleted:

It is removed from the DOM.

It is also removed from localStorage to maintain synchronization.



4. Search/Filter Todos

A search feature is implemented:

Filters the displayed todos in real-time as the user types.

Matching todos remain visible, while non-matching ones are hidden using a filtered CSS class.


5. Event Listeners for User Interaction

Submit Event:

Handles adding todos when the form is submitted.

Prevents submission if the input is empty.


Click Event:

Detects clicks on the "Delete" button to remove specific todos.


Keyup Event:

Filters todos as the user types in the search box.



6. DOM Manipulation

Dynamically creates and modifies DOM elements:

Adds new <li> elements to the todo list.

Attaches "Delete" buttons to each todo item.

Uses CSS classes (filtered) for toggling visibility.




7. Input Validation

Prevents empty todos from being added with a check on input.value.trim().


8. Modularity

Code is divided into reusable functions, such as:

addTodos (to add a todo to the DOM).

saveTodoToLocalStorage (to save todos).

removeTodoFromLocalStorage (to delete todos).

loadTodos (to initialize todos from storage).



9. Scalability

The code is designed to easily handle more todos or additional features (e.g., editing todos, advanced filters).



10. User Feedback

Alerts the user if they try to add an empty todo.


This code provides a functional, user-friendly todo list application with localStorage persistence and a search feature, making it ideal for personal task management.
