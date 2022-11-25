import FileContainer from "../../contenedores/contenedorArchivo.js";

class productosDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    };
};

export default productosDaoArchivo;