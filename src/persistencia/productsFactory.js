import { PRODUCT } from "../config/config.js";

let productDao;

switch (PRODUCT) {
    case "firebase":
        const { default: FirebaseContainer } = await import("./daos/FirebaseContainer.js");
        productDao = new FirebaseContainer();
        break;
    default:
        const { default: MongoContainer } = await import("./daos/MongoContainer.js");
        productDao = new MongoContainer("products", "Products");
        break;
};

export { productDao };