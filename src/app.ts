import { Task } from "./classes/Task.js";
import { TaskListItem } from "./classes/TaskListItem.js";

const form = document.querySelector('.input-area') as HTMLFormElement;
const ul = document.querySelector('.list') as HTMLUListElement;
const list = new TaskListItem(ul);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = document.querySelector('#activity') as HTMLInputElement;
    list.render(task.value);
}, false );


