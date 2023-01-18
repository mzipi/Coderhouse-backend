import ProductsService from './carts-service.js';

const products = new ProductsService();

export async function getProductsController(req, res) {
    const data = await products.getAllData();
    res.json(data);
}

export async function postProductController(req, res) {
    return await products.setData(req);
}

export async function putProductController(req, res) {
    return await products.updateData(req);
};

export async function deleteProductController(req, res) {
    return await products.delData(req);
};