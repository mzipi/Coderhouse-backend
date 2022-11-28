import { MSG, PRODUCT } from "../config.js";

let msgDao, productDao;

switch (MSG) {
    case "json":
        const { default: msgDaoArchivo } = import("./msg/MsgDaoArchivo.js");
        msgDao = new msgDaoArchivo("../db");
        break;
    case "firebase":
        const { default: msgDaoFirebase } = await import("./msg/MsgDaoFirebase.js");
        msgDao = new msgDaoFirebase();
        break;
    case "mongodb":
        const { default: msgDaoMongoDB } = await import("./msg/MsgDaoMongoDB.js");
        msgDao = new msgDaoMongoDB();
        break;
    default:
        const { default: msgDaoMem } = await import("./msg/msgDaoMem.js")
        msgDao = new msgDaoMem();
        break;
};

switch (PRODUCT) {
    case "json":
        const { default: productsDaoArchivo } = await import("./products/ProductsDaoArchivo.js");
        productDao = new productsDaoArchivo("../db");
        break;
    case "firebase":
        const { default: productsDaoFirebase } = await import("./products/ProductsDaoFirebase.js");
        productDao = new productsDaoFirebase();
        break;
    case "mongodb":
        const { default: productsDaoMongoDB } = await import("./products/ProductsDaoMongo.js");
        productDao = new productsDaoMongoDB();
        break;
    default:
        const { default: productsDaoMem } = await import("./products/ProductsDaoMem.js")
        productDao = new productsDaoMem();
        break;
};

export { productDao, msgDao };