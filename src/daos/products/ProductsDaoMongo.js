import MongoContainer from "../../containers/MongoContainer.js";

class ProductsDaoMongoDb extends MongoContainer {

    constructor() {
        super("products");
    };
};

export default ProductsDaoMongoDb;