import './style.css';

const todoArr = [
  {
    index: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 1,
    description: 'complete To Do list project',
    completed: false,
  },
];

const todoTask = document.querySelector('.to-do-task');
todoArr.forEach((task) => {
  const div = document.createElement('div');
  div.classList.add('todo');
  div.innerHTML += `
  <input type="checkbox">
  <p class="">${task.description}</p>
  <i class="uil uil-ellipsis-v"></i>
  
  `;
  todoTask.append(div);
});