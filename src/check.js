import Store from "./storage.js";

export default function updateStatus(checkbox) {
  console.log(checkbox);
  const id = checkbox.id;
  let tasks = Store.getToDos();
  tasks = tasks.map(task => {
    if (task.id.toString() === id) {
      return {...task, completed : !task.completed}
    } else {
      return task;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks)); 
};