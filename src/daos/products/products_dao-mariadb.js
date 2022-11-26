import MariadbContainer from "../../containers/mariadb_container.js";

class ProductsDaoMariadb extends MariadbContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    };
};

export default ProductsDaoMariadb;