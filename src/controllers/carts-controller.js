import CartsService from '../services/carts-service.js';

const cart = new CartsService();

export async function getCartController(req, res) {
    const data = await cart.getData();
    res.json(data);
}

export async function postCartController(req, res) {
    const data = await cart.setData(req);
    res.json(data);
}

export async function deleteCartController(req, res) {
    const data = await cart.deleteData(req.params);
    res.json(data);
};