import FileContainer from "../../containers/FileContainer.js";

class ProductsDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    };
};

export default ProductsDaoArchivo;