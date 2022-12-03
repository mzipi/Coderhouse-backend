import generarProducto from '../api/product-generator.js';

class NegocioTest {

    generar(cant = 5) {
        const nuevos = [];
        for (let i = 0; i < cant; i++) {
            const nuevoProducto = generarProducto();
            nuevos.push(nuevoProducto);
        }
        return nuevos;
    }
}

export default NegocioTest;