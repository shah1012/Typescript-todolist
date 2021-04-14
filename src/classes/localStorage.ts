import { getItem } from "./getItems.js";

export class localStorageClass {
  private g1 = new getItem();
  constructor(private name: string) {}

  addToStorage = (todo: string): void => {
    let items = this.g1.fetch(this.name);
    items.push(todo);
    localStorage.setItem(this.name, JSON.stringify(items));
  };

  removeFromStorage = (todoDiv: HTMLDivElement): void => {
    let items = this.g1.fetch(this.name);
    const todoIndex = (todoDiv.children[0] as HTMLElement).innerText;
    items.splice(items.indexOf(todoIndex), 1);
    localStorage.setItem(this.name, JSON.stringify(items));
  };

  updateTodo = (todoDiv: HTMLDivElement, prevValue: string): void => {
    let items = this.g1.fetch(this.name);
    items[items.indexOf(prevValue)] = (todoDiv
      .children[0] as HTMLElement).innerText;
    localStorage.setItem(this.name, JSON.stringify(items));
  };
}
