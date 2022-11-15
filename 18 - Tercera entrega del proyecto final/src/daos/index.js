require("dotenv").config();

let cartDao, productDao;

switch (process.env.CART) {
    // case "json":
    //     const { default: carritosDaoArchivo } = require("./carritos/carritosDaoArchivo.js");
    //     cartDao = new carritosDaoArchivo("../db");
    //     break;
    case "firebase":
        const carritosDaoFirebase = require("./carritos/carritosDaoFirebase.js");
        cartDao = new carritosDaoFirebase();
        break;
    case "mongodb":
        const carritosDaoMongoDB = require("./carritos/carritosDaoMongoDB.js");
        cartDao = new carritosDaoMongoDB();
        break;
    // default:
    //     const { default: carritosDaoMem } = require("./carritos/carritosDaoMem.js")
    //     cartDao = new carritosDaoMem();
    //     break;
};

switch (process.env.PRODUCT) {
    // case "json":
    //     const { default: productosDaoArchivo } = require("./productos/productosDaoArchivo.js");
    //     productDao = new productosDaoArchivo("../db");
    //     break;
    case "firebase":
        const productosDaoFirebase = require("./productos/productosDaoFirebase.js");
        productDao = new productosDaoFirebase();
        break;
    case "mongodb":
        const productosDaoMongoDB = require("./productos/productosDaoMongoDB.js");
        productDao = new productosDaoMongoDB();
        break;
    // default:
    //     const { default: productosDaoMem } = require("./productos/productosDaoMem.js")
    //     productDao = new productosDaoMem();
    //     break;
};

module.exports = { productDao, cartDao };