const MongoContainer = require("../../contenedores/contenedorMongoDB.js");

class productosDaoMongoDb extends MongoContainer {

    constructor() {
        super("products");
    };
};

module.exports = productosDaoMongoDb;