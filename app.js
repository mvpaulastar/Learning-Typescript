import { TaskListItem } from "./classes/TaskListItem.js";
const form = document.querySelector('.input-area');
const ul = document.querySelector('.list');
const list = new TaskListItem(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = document.querySelector('#activity');
    list.render(task.value);
}, false);
