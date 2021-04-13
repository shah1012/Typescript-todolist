import { RenderTodo } from "./interfaces/RenderTodo.js";
import { getItem } from "./interfaces/getItems.js";
const input = document.querySelector(".todo-input");
const addButton = document.querySelector(".todo-button");
const ul = document.querySelector(".todolist");
const form = document.querySelector(".inputForm");
const updateInput = document.querySelector(".update-input");
const model = document.querySelector(".model");
//constants
const List = new RenderTodo(ul);
let g1 = new getItem();
let parent;
//functions
const fetchTodos = () => {
    let items = g1.fetch("todos");
    items.forEach((item) => {
        List.render(item);
    });
};
const addToStorage = (todo) => {
    let items = g1.fetch("todos");
    items.push(todo);
    localStorage.setItem("todos", JSON.stringify(items));
};
const addTodo = (e) => {
    e.preventDefault();
    if (input.value !== "") {
        List.render(input.value);
        addToStorage(input.value);
        input.value = "";
    }
    else {
        alert("Please type something in before submitting");
    }
};
const updateStuff = (e) => {
    const clickedItem = e.target;
    parent = clickedItem.parentElement;
    if (clickedItem.classList[0] === "trash-btn") {
        removeFromStorage(parent);
        parent.remove();
    }
    else if (clickedItem.classList[0] === "edit-btn") {
        model.classList.toggle("hide");
        console.log("toggiling stuff");
    }
};
const removeFromStorage = (todo) => {
    console.log(todo.children[0].innerText);
    let items = g1.fetch("todos");
    const todoindex = todo.children[0].innerText;
    items.splice(items.indexOf(todoindex), 1);
    localStorage.setItem("todos", JSON.stringify(items));
};
const updateStorage = (todo, prevValue) => {
    let items = g1.fetch("todos");
    items[items.indexOf(prevValue)] = todo.children[0].innerText;
    localStorage.setItem("todos", JSON.stringify(items));
};
//events
document.addEventListener("DOMContentLoaded", fetchTodos);
ul.addEventListener("click", updateStuff);
form.addEventListener("submit", addTodo);
model.addEventListener("click", (e) => {
    if (e.target.classList[0] === "model") {
        model.classList.add("hide");
    }
    else if (e.target.classList[0] === "update") {
        let prevText = parent.children[0].innerText;
        parent.children[0].innerText = updateInput.value;
        updateStorage(parent, prevText);
        updateInput.value = "";
        model.classList.add("hide");
    }
});
