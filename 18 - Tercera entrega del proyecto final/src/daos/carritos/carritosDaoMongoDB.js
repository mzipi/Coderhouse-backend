import MongoContainer from "../../contenedores/contenedorMongoDB.js";

class carritosDaoMongoDB extends MongoContainer {

    constructor() {
        super("cart");
    };
};

export default carritosDaoMongoDB;