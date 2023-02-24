import Store from './storage.js';

export default function editTask(item) {
  const id = item.id.match(/\d+/)[0];
  item.addEventListener('blur', () => {
    let tasks = Store.getToDos();
    tasks = tasks.map((task) => {
      if (task.index.toString() === id) {
        return { ...task, description: item.textContent };
      }
      return task;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  item.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const tasks = Store.getToDos();
      tasks[item.id - 1].description = item.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
}