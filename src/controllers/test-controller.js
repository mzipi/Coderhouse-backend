import NegocioTest from "../services/ServiceTest.js";

const data = new NegocioTest();

async function getProductsController(req, res) {
    const products = data.generar();
    res.json(products);
};

export default getProductsController;