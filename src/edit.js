import Store from "./storage.js";

export default function editTask(item) {
  item.addEventListener('focusout', () => {
    const tasks = Store.getToDos();
    tasks[item.id - 1].description = item.value;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks)
  });

  item.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const tasks = Store.getToDos();
      tasks[item.id - 1].description = item.value;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
}