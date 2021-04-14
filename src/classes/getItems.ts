export class getItem {
  constructor() {}

  fetch = (name: string) => {
    let items: string[];
    if (localStorage.getItem(name) === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem(name)!);
    }
    return items;
  };
}
