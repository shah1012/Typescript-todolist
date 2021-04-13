export class getItem {
    constructor() {
        this.fetch = (name) => {
            let items;
            if (localStorage.getItem(name) === null) {
                items = [];
            }
            else {
                items = JSON.parse(localStorage.getItem(name));
            }
            return items;
        };
    }
}
