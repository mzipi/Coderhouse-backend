import ProductsService from '../services/ProductsService.js';

const products = new ProductsService();

export async function getProductsController(req, res) {
    return await products.getAllData();
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