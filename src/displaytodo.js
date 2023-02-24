import Store from "./storage.js";

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
         <input type="checkbox" id="check">
         <p class="p-element" contentEditable="true">${task.description}</p>
         <button id=${task.index}><i class="uil uil-trash-alt" id=${task.index}></i></button>
        `;
    listOfTasks.appendChild(allTasks);  
  }

  static deleteTask = (element) => {
    if (element.classList.contains('uil-trash-alt')) {
      console.log(element.parentElement.parentElement);
      element.parentElement.parentElement.style.display = 'none';
    };
  };

  // static editToDo = (item) => {
  //   item.addEventListener('focusout', () => {
  //     const array = JSON.parse(localStorage.getItem('array')) || [];
  //     array[item.id-1].description = item.value;
  //     localStorage.setItem('array', JSON.stringify(array));
  //     printTasks();
  //   });
  // }
}

// /////////////////////////////////////////////////////////////////
////////////////////////////////////////////


// item.addEventListener('focusout', () => {
//   const array = JSON.parse(localStorage.getItem('array')) || [];
//   array[item.id-1].description = item.value;
//   localStorage.setItem('array', JSON.stringify(array));
//   printTasks();
// });


