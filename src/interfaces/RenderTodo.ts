export class RenderTodo {
  constructor(private container: HTMLUListElement) {}

  // render method to render the todo
  render = (task: string) => {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("todo");

    const li = document.createElement("li");
    li.innerText = task;
    parentDiv.appendChild(li);

    const trashBtn = document.createElement("button");
    trashBtn.classList.add("trash-btn");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    parentDiv.appendChild(trashBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    parentDiv.appendChild(editBtn);

    this.container.appendChild(parentDiv);
  };
}
