let draggedItem = null;

// Load tasks from local storage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task.text, task.completed));
};

// Add new task
function addTask() {
  const newTaskInput = document.getElementById('newTask');
  const taskText = newTaskInput.value.trim();

  if (taskText === '') return;
  addTaskToDOM(taskText);
  saveTask(taskText);
  newTaskInput.value = '';
}

// Add task to the DOM
function addTaskToDOM(text, completed = false) {
  const todoList = document.getElementById('todoList');

  const taskItem = document.createElement('li');
  taskItem.className = 'todo-item';
  if (completed) taskItem.classList.add('completed');
  taskItem.draggable = true;
  taskItem.innerHTML = `
    <span onclick="toggleComplete(this)">${text}</span>
    <button onclick="removeTask(this)">❌</button>
  `;

  // Drag events
  taskItem.addEventListener('dragstart', dragStart);
  taskItem.addEventListener('dragover', dragOver);
  taskItem.addEventListener('drop', drop);
  taskItem.addEventListener('dragend', dragEnd);

  todoList.appendChild(taskItem);
}

// Save task to local storage
function saveTask(text, completed = false) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ text, completed });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from DOM and local storage
function removeTask(button) {
  const taskItem = button.parentElement;
  const text = taskItem.querySelector('span').innerText;
  taskItem.remove();

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(task => task.text !== text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Toggle task complete state
function toggleComplete(span) {
  const taskItem = span.parentElement;
  taskItem.classList.toggle('completed');

  const text = span.innerText;
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.map(task => {
    if (task.text === text) {
      task.completed = !task.completed;
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Drag events
function dragStart(e) {
  draggedItem = this;
  setTimeout(() => (this.style.display = 'none'), 0);
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  if (this !== draggedItem) {
    const todoList = document.getElementById('todoList');
    todoList.insertBefore(draggedItem, this);
    saveOrder();
  }
}

function dragEnd() {
  this.style.display = 'flex';
  draggedItem = null;
}

// Save the new order to local storage
function saveOrder() {
  const taskItems = document.querySelectorAll('.todo-item');
  const tasks = Array.from(taskItems).map(item => ({
    text: item.querySelector('span').innerText,
    completed: item.classList.contains('completed')
  }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
