const FirebaseContainer = require("../../contenedores/contenedorFirebase.js");

class productosDaoFirebase extends FirebaseContainer {

    constructor() {
        super("products")
    };
};

module.exports = productosDaoFirebase;