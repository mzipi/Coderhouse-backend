export default class Messages {
    #id;
    #author;
    #text;

    constructor({ _id, author,text }) {
        this.#id = _id;
        this.#author = author;
        this.#text = text;
    }

    getAuthor() { return this.#author; }
    getText() { return this.#text; }

    // setPrice(price) {  }

    asDto() {
        return Object.freeze({
            id: this.#id,
            author: this.#author,
            text: this.#text
        });
    }
}