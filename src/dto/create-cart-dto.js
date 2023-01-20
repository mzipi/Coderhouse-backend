export default class Cart {
    #id;
    #items;

    constructor({ id, items }) {
        this.#id = id;
        this.#items = items;
    }

    // Getter

    // Setter

    asDto() {
        return Object.freeze({
            id: this.#id,
            items: this.#items
        });
    }
}