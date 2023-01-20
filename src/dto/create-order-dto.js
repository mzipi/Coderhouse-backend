export default class OrderDto {
    #id;
    #date;
    #idClient;
    #items;

    constructor({ id, date, idClient, items }) {
        this.#id = id;
        this.#date = date;
        this.#idClient = idClient;
        this.#items = items;
    }

    // Getters

    // Setters

    asDto() {
        return Object.freeze({
            id: this.#id,
            date: this.#date,
            idClient: this.#idClient,
            items: this.#items,
        });
    }
}