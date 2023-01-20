import crypto from 'crypto'
import { orders } from '../dao/dao-factory.js';
import OrderRepository from '../repositories/orders-repository.js';
import Order from '../dto/create-order-dto.js';

function idGenerator() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class OrdersService {
    constructor() {
        this.orderRepository = new OrderRepository(orders);
    }

    async setData({body}) {
        const order = new Order({
            id: idGenerator(),
            ...body
        });
        await this.orderRepository.setData(order);
        return order.asDto();
    }

    async getData() {
        const orders = await this.orderRepository.getData();
        return orders.map(order => order.asDto());
    }
}