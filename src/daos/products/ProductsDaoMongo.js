import MongoContainer from "../../persistencia/MongoContainer.js";

class ProductsDaoMongo extends MongoContainer {

    constructor() {
        super("products");
    };
};

export default ProductsDaoMongo;