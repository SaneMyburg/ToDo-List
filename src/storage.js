// import Render from './displaytodo.js';

export default class Store {
  static getToDos = () => {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static addNewTask = (task) => {
    const tasks = Store.getToDos();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  static clearInput = () => {
    document.querySelector('#add-list').value = '';
  };

   static removeTask = (element) => {
     const { id } = element;
     let tasks = Store.getToDos();
     tasks = tasks.filter((task) => task.id.toString() !== id).map((task, index) => (
       { ...task, index: index + 1 }));
     localStorage.setItem('tasks', JSON.stringify(tasks));
   };
}
