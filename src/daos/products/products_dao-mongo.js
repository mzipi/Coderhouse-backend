import MongoContainer from "../../containers/mongo_container.js";

class ProductsDaoMongoDb extends MongoContainer {

    constructor() {
        super("products");
    };
};

export default ProductsDaoMongoDb;