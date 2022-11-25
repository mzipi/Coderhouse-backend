import FileContainer from "../../contenedores/contenedorArchivo.js";

class carritosDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/cart.json`);
    };
};

export default carritosDaoArchivo;