export default class Product {
    #author;
    #text;

    constructor({ author,text }) {
        this.#author = author;
        this.#text = text;
    }

    getAuthor() { return this.#author; }
    getText() { return this.#text; }

    // setPrice(price) {  }

    asDto() {
        return Object.freeze({
            author: this.#author,
            text: this.#text
        });
    }
}