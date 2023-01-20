import crypto from 'crypto'
import { ordersDao } from '../dao/dao-factory.js';
import OrderRepository from '../repositories/orders-repository.js';
import OrderDto from '../dto/create-order-dto.js';

function idGenerator() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class OrdersService {
    constructor() {
        this.orderRepository = new OrderRepository(ordersDao);
    }

    async setData({body}) {
        const order = new OrderDto({
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