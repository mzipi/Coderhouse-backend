import { productDao } from "../daos/index.js";

export default class ServiceProducts {
    getProducts(res) {
        const products = productDao.getAll();
        res.render("pages/products");
    }
}