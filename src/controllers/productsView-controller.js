import ServiceRepo from '../services/ProductsService.js';

const products = new ServiceRepo();

export async function getProductsController(req, res) {
    const data = await products.getProducts();
    res.render("pages/products")
}