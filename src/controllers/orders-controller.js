import OrdersService from '../services/orders-service.js';

const orders = new OrdersService();

export async function getOrdersController(req, res) {
    const data = await orders.getData();
    res.json(data);
}

export async function postOrdersController(req, res) {
    const data = await orders.setData();
    res.json(data);
}