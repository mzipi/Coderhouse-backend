import ServiceRepo from '../services/ProductsService.js';

const products = new ServiceRepo();

export async function getProductsController(req, res) {
    const data = await products.getProducts();
    res.json(data)
}

export async function postProductController(req, res) {
    const data = await products.addProduct(req);
    res.json(data)
}

// export async function putProductController(req, res) {
//     const product = negocioProducts.updateProduct(req.params);
//     if(product === 1) return res.status(200).end();
// };

// export async function deleteProductController(req, res) {
//     const product = negocioProducts.deleteProduct(req.params);
//     if(product === 1) return res.status(200).end();
// };