import * as dotenv from 'dotenv';

dotenv.config();

let msgDao, productsDao;

switch (process.env.MSG) {
    case "json":
        const { default: msgDaoArchivo } = import("./msg/msg_dao-file.js");
        msgDao = new msgDaoArchivo("../db");
        break;
    case "firebase":
        const { default: msgDaoFirebase } = await import("./msg/msg_dao-firebase.js");
        msgDao = new msgDaoFirebase();
        break;
    case "mongodb":
        const { default: msgDaoMongoDB } = await import("./msg/msg_dao-mongo.js");
        msgDao = new msgDaoMongoDB();
        break;
    // case "sqlite":
    //     const { default: msgDaoFirebase } = await import("./msg/msg_dao-firebase.js");
    //     msgDao = new msgDaoFirebase();
    //     break;
    // case "mariadb":
    //     const { default: msgDaoMongoDB } = await import("./msg/msg_dao-mongo.js");
    //     msgDao = new msgDaoMongoDB();
    //     break;
    default:
        const { default: msgDaoMem } = await import("./msg/msg_dao-mem.js")
        msgDao = new msgDaoMem();
        break;
};

switch (process.env.PRODUCT) {
    case "json":
        const { default: productsDaoArchivo } = await import("./products/products_dao-file.js");
        productsDao = new productsDaoArchivo("../db");
        break;
    case "firebase":
        const { default: productsDaoFirebase } = await import("./products/products_dao-firebase.js");
        productsDao = new productsDaoFirebase();
        break;
    case "mongodb":
        const { default: productsDaoMongoDB } = await import("./products/products_dao-mongo.js");
        productsDao = new productsDaoMongoDB();
        break;
    // case "sqlite":
    //     const { default: productsDaoFirebase } = await import("./products/products_dao-firebase.js");
    //     productsDao = new productsDaoFirebase();
    //     break;
    // case "mariadb":
    //     const { default: productsDaoMongoDB } = await import("./products/products_dao-mongo.js");
    //     productsDao = new productsDaoMongoDB();
    //     break;
    default:
        const { default: productsDaoMem } = await import("./products/products_dao-mem.js")
        productsDao = new productsDaoMem();
        break;
};

export { productsDao, msgDao };