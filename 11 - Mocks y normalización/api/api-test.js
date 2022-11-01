import ContenedorMemoria from '../contenedores/ContenedorMemoria.js';
import generarProducto from '../utils/generadorDeProductos.js';

class ApiTestMock extends ContenedorMemoria {
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

export default ApiTestMock;