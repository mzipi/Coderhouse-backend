const FirebaseContainer = require("../../contenedores/contenedorFirebase.js");

class carritosDaoFirebase extends FirebaseContainer {

    constructor() {
        super("cart")
    };
};

module.exports = carritosDaoFirebase;