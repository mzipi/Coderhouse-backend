import NegocioTest from "../services/ServiceTest.js";

const data = new NegocioTest();

async function getProductsController(req, res) {
    const products = await data.getProducts();
    res.json(products);
};

async function getProductController(req, res) {
    const product = await data.getProduct(req.params);
    res.json(product);
};

async function postProductController(req, res) {
    const product = await data.addProduct(req.body);
    if(product === 1) return res.status(201).end();
};

async function putProductController(req, res) {
    const product = data.updateProduct(req.params);
    if(product === 1) return res.status(201).end();
};

async function deleteProductController(req, res) {
    const product = data.deleteProduct(req.params);
    if(product === 1) return res.status(201).end();
};

export { getProductsController, getProductController, postProductController, putProductController, deleteProductController };