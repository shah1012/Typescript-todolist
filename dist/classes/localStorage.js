import { getItem } from "./getItems.js";
export class localStorageClass {
    constructor(name) {
        this.name = name;
        this.g1 = new getItem();
        this.addToStorage = (todo) => {
            let items = this.g1.fetch(this.name);
            items.push(todo);
            localStorage.setItem(this.name, JSON.stringify(items));
        };
        this.removeFromStorage = (todoDiv) => {
            let items = this.g1.fetch(this.name);
            const todoIndex = todoDiv.children[0].innerText;
            items.splice(items.indexOf(todoIndex), 1);
            localStorage.setItem(this.name, JSON.stringify(items));
        };
        this.updateTodo = (todoDiv, prevValue) => {
            let items = this.g1.fetch(this.name);
            items[items.indexOf(prevValue)] = todoDiv
                .children[0].innerText;
            localStorage.setItem(this.name, JSON.stringify(items));
        };
    }
}
