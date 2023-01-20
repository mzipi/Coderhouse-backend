export default class Order {
    #id;
    #email;
    #password;
    #name;
    #lastname;
    #image;

    constructor({ id, email, password, name, lastname, image }) {
        this.#id = id;
        this.#email = email;
        this.#password = password;
        this.#name = name;
        this.#lastname = lastname;
        this.#image = image;
    }

    // Getter

    // Setter

    asDto() {
        return Object.freeze({
            id: this.#id,
            email: this.#email,
            password: this.#password,
            name: this.#name,
            lastname: this.#lastname,
            image: this.#image
        });
    }
}