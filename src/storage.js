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
     let tasks = Store.getToDos();
     tasks = tasks.filter((item) => item.index.toString() !== element.id.toString());
     let i = 1;
     tasks.forEach((task) => {
       task.index = i;
       i += 1;
     });
     localStorage.setItem('tasks', JSON.stringify(tasks));
   };
}
