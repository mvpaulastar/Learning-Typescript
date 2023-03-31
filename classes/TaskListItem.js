export class TaskListItem {
  constructor(container) {
    this.container = container;
  }
  render(detail) {
    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let delBtn = document.createElement("button");

    delBtn.innerText = "Delete";
    delBtn.classList.add("del-button");
    h1.innerText = detail;
    li.append(h1);
    li.append(delBtn);
    console.log("New Task Created");

    delBtn.addEventListener("click", () => {
      this.container.removeChild(li);
    });

    this.container.append(li);
  }
}
