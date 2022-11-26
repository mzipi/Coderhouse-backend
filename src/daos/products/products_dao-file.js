import FileContainer from "../../containers/fileContainer.js";

class ProductsDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    };
};

export default ProductsDaoArchivo;