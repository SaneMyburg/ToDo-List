import './style.css';
import RenderList, { todos } from './displaytodo.js';

window.addEventListener('load', RenderList.displayToDo);

const taskInput = document.querySelector('#add-list');
const inputForm = document.querySelector('.list-form');

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userTask = taskInput.value.trim();

  if (!todos) {
    todos = [];
  }
  taskInput.value = '';
  const taskInfo = { description: userTask, completed: false, index: todos.length + 1 };
  todos.push(taskInfo);
  localStorage.setItem('todo-list', JSON.stringify(todos));
  // displayToDo()
});