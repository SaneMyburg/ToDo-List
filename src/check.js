import Store from './storage.js';

export default function updateStatus(checkbox) {
  const { id } = checkbox;
  let tasks = Store.getToDos();
  tasks = tasks.map((task) => {
    if (task.id.toString() === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}