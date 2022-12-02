import NegocioProducts from "../services/ServiceProducts.js";

const negocioProducts = new NegocioProducts();

async function getProductsController(req, res) {
    const products = await negocioProducts.getProducts();
    res.json(products);
};

async function getProductController(req, res) {
    const product = await negocioProducts.getProduct(req.params);
    res.status(202).json(product);
};

async function postProductController(req, res) {
    const product = await negocioProducts.addProduct(req.body);
    if(product) return res.status(201).json(product);
};

async function putProductController(req, res) {
    const product = negocioProducts.updateProduct(req.params);
    if(product === 1) return res.status(200).end();
};

async function deleteProductController(req, res) {
    const product = negocioProducts.deleteProduct(req.params);
    if(product === 1) return res.status(200).end();
};

export { getProductsController, getProductController, postProductController, putProductController, deleteProductController };