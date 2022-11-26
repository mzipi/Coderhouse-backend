import FirebaseContainer from "../../containers/firebase_container.js";

class ProductsDaoFirebase extends FirebaseContainer {

    constructor() {
        super("products")
    };
};

export default ProductsDaoFirebase;