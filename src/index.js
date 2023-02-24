import './style.css';
import Store from './storage.js';
import Render from './displaytodo.js';
import editTask from './edit.js';

// Display Tasks

document.addEventListener('DOMContentLoaded', Render.displayTasks);

//Adding Task
document.querySelector('.list-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const userTask = document.querySelector('#add-list').value.trim();
  const tasks = Store.getToDos();
  const newtask = { description: userTask, completed: false, index: tasks.length +1};
  Render.addTasks(newtask);
  Store.addNewTask(newtask);
  Store.clearInput();
});

document.querySelector('.to-do-task').addEventListener('click', (e) => {
  Render.deleteTask(e.target);
  Store.removeTask(e.target);
});

// Edit ToDo
document.querySelector('.to-do-task').addEventListener('click', (e) => {
  if (e.target.classList.contains('p-element')) {
    editTask(e.target);
    console.log(e.target);
  }
});

// const editToDo = (item) => {
//   const tasks = Store.getToDos();
//   item.addEventListener('focusout', () => {
//     tasks[item.id-1].description = item.value;
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     printTasks();
//   }); 
// }
// editToDo(description);
