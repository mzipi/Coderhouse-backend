const MongoContainer = require("../../contenedores/contenedorMongoDB.js");

class carritosDaoMongoDB extends MongoContainer {

    constructor() {
        super("cart");
    };
};

module.exports = carritosDaoMongoDB;