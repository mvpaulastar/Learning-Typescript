export class TaskListItem {
    constructor( private container: HTMLUListElement){}

    render( detail: string ){
        let li = document.createElement("li");
        let h1 = document.createElement("h1");
        let delBtn = document.createElement("button");
    
        delBtn.innerText = "Delete";
        delBtn.classList.add("del-button");
        h1.innerText = detail;
        li.append(h1);
        li.append(delBtn);
    
        delBtn.addEventListener("click", () => {
          this.container.removeChild(li);
        });
    
        this.container.append(li);
    }
}