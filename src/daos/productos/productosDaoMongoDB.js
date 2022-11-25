import MongoContainer from "../../contenedores/contenedorMongoDB.js";

class productosDaoMongoDb extends MongoContainer {

    constructor() {
        super("products");
    };
};

export default productosDaoMongoDb;