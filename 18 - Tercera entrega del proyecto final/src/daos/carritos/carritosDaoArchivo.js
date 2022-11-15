const FileContainer = require("../../contenedores/contenedorArchivo.js");

class carritosDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/cart.json`);
    };
};

module.exports = carritosDaoArchivo;