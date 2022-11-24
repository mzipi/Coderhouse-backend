import * as dotenv from 'dotenv';

dotenv.config();

let cartDao, productDao;

switch (process.env.CART) {
    // case "json":
    //     const { default: carritosDaoArchivo } = import("./carritos/carritosDaoArchivo.js");
    //     cartDao = new carritosDaoArchivo("../db");
    //     break;
    case "firebase":
        const { default: carritosDaoFirebase } = await import("./carritos/carritosDaoFirebase.js");
        cartDao = new carritosDaoFirebase();
        break;
    case "mongodb":
        const { default: carritosDaoMongoDB } = await import("./carritos/carritosDaoMongoDB.js");
        cartDao = new carritosDaoMongoDB();
        break;
    // default:
    //     const { default: carritosDaoMem } = await import("./carritos/carritosDaoMem.js")
    //     cartDao = new carritosDaoMem();
    //     break;
};

switch (process.env.PRODUCT) {
    // case "json":
    //     const { default: productosDaoArchivo } = await import("./productos/productosDaoArchivo.js");
    //     productDao = new productosDaoArchivo("../db");
    //     break;
    case "firebase":
        const { default: productosDaoFirebase } = await import("./productos/productosDaoFirebase.js");
        productDao = new productosDaoFirebase();
        break;
    case "mongodb":
        const { default: productosDaoMongoDB } = await import("./productos/productosDaoMongoDB.js");
        productDao = new productosDaoMongoDB();
        break;
    // default:
    //     const { default: productosDaoMem } = await import("./productos/productosDaoMem.js")
    //     productDao = new productosDaoMem();
    //     break;
};

export { productDao, cartDao };