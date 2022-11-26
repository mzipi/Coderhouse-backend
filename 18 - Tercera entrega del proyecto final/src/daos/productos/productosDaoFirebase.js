import FirebaseContainer from "../../contenedores/contenedorFirebase.js";

class productosDaoFirebase extends FirebaseContainer {

    constructor() {
        super("products")
    };
};

export default productosDaoFirebase;