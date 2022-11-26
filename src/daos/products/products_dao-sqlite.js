import SqliteContainer from "../../containers/sqlite_container.js";

class ProductsDaoSqlite extends SqliteContainer {

    constructor(rutaDir) {
        super(`${rutaDir}/products.json`)
    };
};

export default ProductsDaoSqlite;