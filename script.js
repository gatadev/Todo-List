// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Add event listener to the 'Add' button
    addBtn.addEventListener('click', () => {
        // Get the value from the input field and trim any extra spaces
        const task = todoInput.value.trim();
        // If the input is not empty, add the task
        if (task) {
            addTask(task);
            // Clear the input field after adding the task
            todoInput.value = '';
        }
    });
// Function to add a new task to the list
function addTask(task) {
    // Create a new list item (li) element
    const li = document.createElement('li');
    // Set the text content of the li to the task
    li.textContent = task;

    // Create a 'Remove' button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    // Add event listener to remove the task when clicked
    removeBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    // Append the 'Remove' button to the list item
    li.appendChild(removeBtn);
    // Append the list item to the todo list
    todoList.appendChild(li);
}

// Add event listener to the input field to allow adding tasks by pressing 'Enter'
todoInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});
});