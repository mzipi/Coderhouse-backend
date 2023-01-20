import ProductsService from '../services/products-service.js';

const products = new ProductsService();

export async function getProductsController(req, res) {
    const data = await products.getData(req);
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
    const data = await products.deleteData(req);
    res.json(data);
};