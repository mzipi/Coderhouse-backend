import ProductsDaoMongo from "../daos/products/ProductsDaoMongo.js";
import generarProducto from '../utils/product-generator.js';

class NegocioTest extends ProductsDaoMongo {
    constructor() {
        super()
    }

    generar(cant = 5) {
        const nuevos = [];
        for (let i = 0; i < cant; i++) {
            const nuevoProducto = generarProducto();
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

export default NegocioTest;