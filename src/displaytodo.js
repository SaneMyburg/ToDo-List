import Store from './storage.js';

export default class Render {
  static displayTasks = () => {
    const tasks = Store.getToDos();
    tasks.forEach((task) => Render.addTasks(task));
  }

  static addTasks = (task) => {
    const listOfTasks = document.querySelector('.to-do-task');
    const allTasks = document.createElement('div');
    allTasks.classList.add('todo');

    allTasks.innerHTML = `
         <input type="checkbox" id="${task.id}" class="check">
         <p class="p-element" id="paragraph-${task.id}" contentEditable="true">${task.description}</p>
         <button id="${task.id}"><i class="uil uil-trash-alt btn" id="${task.id}"></i></button>
        `;
    listOfTasks.appendChild(allTasks);
  }

  static deleteTask = (element) => {
    if (element.classList.contains('uil-trash-alt')) {
      element.parentElement.parentElement.remove();
    }
  };
}
