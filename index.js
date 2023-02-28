import './style.css';
import Store from './storage.js';
import Render from './displaytodo.js';
import editTask from './edit.js';
import updateStatus from './check.js';

// Display Tasks
window.addEventListener('load', (Render.displayTasks));
// Adding Task
document.querySelector('.list-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const userTask = document.querySelector('#add-list').value.trim();
  const tasks = Store.getToDos();
  const id = Math.floor(Math.random() * 1000);
  const newtask = {
    description: userTask, completed: false, index: tasks.length + 1, id,
  };
  Render.addTasks(newtask);
  Store.addNewTask(newtask);
  Store.clearInput();
});

document.querySelector('.to-do-task').addEventListener('click', (e) => {
  // Edit ToDo
  if (e.target.classList.contains('p-element')) {
    editTask(e.target);
  // Remove Task
  } else if (e.target.tagName === 'I') {
    Store.removeTask(e.target);
    Render.deleteTask(e.target);

    // Checked Tasks
  } else if (e.target.className === 'check') {
    updateStatus(e.target);
    if (e.target.checked) {
      e.target.nextElementSibling.style.textDecoration = 'line-through';
    } else {
      e.target.nextElementSibling.style.textDecoration = 'none';
    }
  }
});

// Remove all completed

document.querySelector('.clear-all').addEventListener('click', (e) => {
  e.preventDefault();
  let tasks = Store.getToDos();
  tasks = tasks.filter((todo) => todo.completed === false);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  window.location.reload();
});