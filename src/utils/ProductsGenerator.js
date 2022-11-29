import ContenedorMemoria from "../persistencia/MemContainer.js";
import { faker } from "@faker-js/faker";
faker.locale = "es";

class ProductsGenerator extends ContenedorMemoria {
    constructor() {
        super()
    }

    generar() {
        const nuevos = [];
        for (let i = 0; i < 5; i++) {
            const nuevoProducto = {
                name: faker.commerce.product(),
                price: faker.commerce.price(),
                image: faker.image.food(512, 512, true)
            }
            const guardado = this.save(nuevoProducto);
            console.log(guardado);
            nuevos.push(guardado);
        }
        return nuevos;
    }
    getAll(){
        return this.productos;
    }
}

export default ProductsGenerator;