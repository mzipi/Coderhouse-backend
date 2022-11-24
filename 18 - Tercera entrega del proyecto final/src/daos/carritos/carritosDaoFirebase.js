import FirebaseContainer from "../../contenedores/contenedorFirebase.js";

class carritosDaoFirebase extends FirebaseContainer {

    constructor() {
        super("cart")
    };
};

export default carritosDaoFirebase;