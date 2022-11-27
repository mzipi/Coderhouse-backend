import FileContainer from "../../containers/file_container.js";

class ProductsDaoArchivo extends FileContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    };
};

export default ProductsDaoArchivo;