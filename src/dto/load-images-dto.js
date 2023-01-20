export default class ImagesDto {
    #image;

    constructor(image) {
        this.#image = { ...image };
    }

    // Getters

    // Setters


    asDto() {
        return Object.freeze({
            image: this.#image,
        });
    }
}