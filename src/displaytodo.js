const allTasks = document.querySelector('.to-do-task');
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

export default class RenderList {
 static displayToDo = () => {
   let div = '';
   todos.forEach((todo) => {
     div += `
        <div class="todo">
          <input type="checkbox">
          <p class="checked" contenteditable="true">${todo.description}</p>
            <div class="edit">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
         </div>
         `;
   });
   allTasks.innerHTML = div;
 }
}

export { todos };