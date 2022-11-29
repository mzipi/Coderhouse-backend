import FirebaseContainer from "../../persistencia/FirebaseContainer.js";

class ProductsDaoFirebase extends FirebaseContainer {

    constructor() {
        super("products")
    };
};

export default ProductsDaoFirebase;