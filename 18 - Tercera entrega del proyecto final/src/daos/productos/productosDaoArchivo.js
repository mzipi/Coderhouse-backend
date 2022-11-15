const FileContainer = require("../../contenedores/contenedorArchivo.js");

class productosDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    };
};

module.exports = productosDaoArchivo;