import CartsService from '../services/carts-service.js';

const cart = new CartsService();

export async function getCartController(req, res) {
    const data = await cart.getData();
    res.json(data);
}

export async function postCartController(req, res) {
    return await cart.setData(req);
}

export async function deleteCartController(req, res) {
    return await cart.deleteData(req);
};