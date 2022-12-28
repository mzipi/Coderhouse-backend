import ProductsService from '../services/ProductsService.js';

const products = new ProductsService();

export async function getProductsController(req, res) {
    const data = await products.getAllData();
    res.json(data);
}

export async function postProductController(req, res) {
    const data = await products.setData(req);
    res.json(data);
}

export async function putProductController(req, res) {
    const data = await products.updateData(req);
    res.json(data);
};

export async function deleteProductController(req, res) {
    const data = await products.delData(req);
    res.json(data);
};