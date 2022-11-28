import MongoContainer from "../../containers/MongoContainer.js";

class ProductsDaoMongo extends MongoContainer {

    constructor() {
        super("products");
    };
};

export default ProductsDaoMongo;