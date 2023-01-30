import { ordersDao } from '../dao/dao-factory.js';
import OrderRepository from '../repositories/orders-repository.js';
import OrderDto from '../dto/create-order-dto.js';

export default class OrdersService {
    constructor() {
        this.orderRepository = new OrderRepository(ordersDao);
    }

    async setData() {
        const order = new OrderDto({
            // timestamp
        });
        await this.orderRepository.setData(order);
        return order.asDto();
    }

    async getData() {
        const orders = await this.orderRepository.getData();
        return orders.map(order => order.asDto());
    }
}