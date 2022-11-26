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
    case "sqlite":
        const { default: msgDaoSqlite } = await import("./msg/msg_dao-sqlite.js");
        msgDao = new msgDaoSqlite();
        break;
    case "mariadb":
        const { default: msgDaoMariadb } = await import("./msg/msg_dao-mariadb.js");
        msgDao = new msgDaoMariadb();
        break;
    case "mem":
        const { default: msgDaoMem } = await import("./msg/msg_dao-mem.js");
        msgDao = new msgDaoMem();
        break;
    default:
        const { default: msgDaoMongoDB } = await import("./msg/msg_dao-mongo.js")
        msgDao = new msgDaoMongoDB();
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
    case "sqlite":
        const { default: productsDaoSqlite } = await import("./products/products_dao-sqlite.js");
        productsDao = new productsDaoSqlite();
        break;
    case "mariadb":
        const { default: productsDaoMariaDB } = await import("./products/products_dao-mariadb.js");
        productsDao = new productsDaoMariaDB();
        break;
    case "mem":
        const { default: productsDaoMem } = await import("./products/products_dao-mem.js");
        productsDao = new productsDaoMem();
        break;
    default:
        const { default: productsDaoMongoDB } = await import("./products/products_dao-mongo.js")
        productsDao = new productsDaoMongoDB();
        break;
};

export { productsDao, msgDao };