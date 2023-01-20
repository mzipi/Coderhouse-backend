import Order from '../dto/create-order-dto.js';

export default class OrderRepository {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.setData(data.asDto());
    }

    async getData() {
        const dtos = await this.dao.getData();
        return dtos.map(dto => new Order(dto));
    }
}