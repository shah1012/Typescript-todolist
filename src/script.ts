import { RenderTodo } from "./classes/RenderTodo.js";
import { getItem } from "./classes/getItems.js";
import { localStorageClass } from "./classes/localStorage.js";
const input = document.querySelector(".todo-input")! as HTMLInputElement;
const addButton = document.querySelector(".todo-button")! as HTMLButtonElement;
const ul = document.querySelector(".todolist") as HTMLUListElement;
const form = document.querySelector(".inputForm")! as HTMLFormElement;
const updateInput = document.querySelector(
  ".update-input"
)! as HTMLInputElement;

const model = document.querySelector(".model")! as HTMLDivElement;

//constants
const List = new RenderTodo(ul);
const l1 = new localStorageClass("todos");
let g1 = new getItem();
let parent: any;

//functions
const fetchTodos = () => {
  let items = g1.fetch("todos");
  items.forEach((item) => {
    List.render(item);
  });
};

const addTodo = (e: Event) => {
  e.preventDefault();
  if (input.value !== "") {
    List.render(input.value);
    l1.addToStorage(input.value);
    input.value = "";
  } else {
    alert("Please type something in before submitting");
  }
};

const updateStuff = (e: any) => {
  const clickedItem = e.target;
  parent = clickedItem.parentElement;
  if (clickedItem.classList[0] === "trash-btn") {
    l1.removeFromStorage(parent);
    parent.remove();
  } else if (clickedItem.classList[0] === "edit-btn") {
    model.classList.toggle("hide");
    console.log("toggiling stuff");
  }
};

//events
document.addEventListener("DOMContentLoaded", fetchTodos);
ul.addEventListener("click", updateStuff);
form.addEventListener("submit", addTodo);
model.addEventListener("click", (e: any) => {
  if (e.target.classList[0] === "model") {
    model.classList.add("hide");
  } else if (e.target.classList[0] === "update") {
    let prevText = parent.children[0].innerText;
    parent.children[0].innerText = updateInput.value;

    l1.updateTodo(parent, prevText);

    updateInput.value = "";
    model.classList.add("hide");
  }
});
