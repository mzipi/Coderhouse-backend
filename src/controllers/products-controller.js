import ServiceProducts from "../services/ServicesProduct.js";

const products = new ServiceProducts();

export default function productsController(req, res) {
    products.getProducts(res);
}