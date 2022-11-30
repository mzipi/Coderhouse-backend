import MongoContainer from "../../persistencia/MongoContainer.js";
import Products from "../../models/products-model.js";


class ProductsDaoMongo extends MongoContainer {

    constructor() {
        super("products", Products);
    };
};

export default ProductsDaoMongo;