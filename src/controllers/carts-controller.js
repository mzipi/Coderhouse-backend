import CartsService from '../services/carts-service.js';

const cart = new CartsService();

export async function getCartController(req, res) {
    if(req.isAuthenticated()) {
        const data = await cart.getData();
        res.json(data);
    } else {
        res.json({ permission: 'denied'});
    }
}

export async function postCartController(req, res) {
    if(req.isAuthenticated()) {
        await cart.setData(req);
        res.json({ message: 'product loaded to cart' });
    } else {
        res.json({ permission: 'denied'});
    }
}

export async function deleteCartController(req, res) {
    if(req.isAuthenticated()) {
        cart.deleteData(req.params);
        res.json({ message: 'product deleted from cart' });
    } else {
        res.json({ permission: 'denied'});
    }
};