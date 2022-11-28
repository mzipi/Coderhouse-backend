import { MSG, PRODUCT } from "../config.js";

let msgDao, productDao;

switch (MSG) {
    case "json":
        const { default: MsgDaoArchivo } = import("./msg/MsgDaoArchivo.js");
        msgDao = new MsgDaoArchivo("../db");
        break;
    case "firebase":
        const { default: MsgDaoFirebase } = await import("./msg/MsgDaoFirebase.js");
        msgDao = new MsgDaoFirebase();
        break;
    case "mysql":
        const { default: MsgDaoMysql } = await import("./msg/MsgDaoMysql.js");
        msgDao = new MsgDaoMysql();
        break;
    case "sqlite":
        const { default: MsgDaoSqlite } = await import("./msg/MsgDaoSqlite.js");
        msgDao = new MsgDaoSqlite();
        break;
    case "mem":
        const { default: MsgDaoMem } = await import("./msg/MsgDaoMem.js")
        msgDao = new MsgDaoMem();
        break;
    default:
        const { default: MsgDaoMongoDB } = await import("./msg/MsgDaoMongo.js");
        msgDao = new MsgDaoMongoDB();
        break;
};

switch (PRODUCT) {
    case "json":
        const { default: ProductsDaoArchivo } = await import("./products/ProductsDaoArchivo.js");
        productDao = new ProductsDaoArchivo("../db");
        break;
    case "firebase":
        const { default: ProductsDaoFirebase } = await import("./products/ProductsDaoFirebase.js");
        productDao = new ProductsDaoFirebase();
        break;
    case "mysql":
        const { default: ProductsDaoMysql } = await import("./products/ProductsDaoMysql.js");
        productDao = new ProductsDaoMysql();
        break;
    case "sqlite":
        const { default: ProductsDaoSqlite } = await import("./products/ProductsDaoSqlite.js");
        productDao = new ProductsDaoSqlite();
        break;
    case "mem":
        const { default: ProductsDaoMem } = await import("./products/ProductsDaoMem.js")
        productDao = new ProductsDaoMem();
        break;
    default:
        const { default: ProductsDaoMongoDB } = await import("./products/ProductsDaoMongo.js");
        productDao = new ProductsDaoMongoDB();
        break;
};

export { productDao, msgDao };