import Product from '../dto/create-order-dto.js';

export default class ProductsRepo {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.setData(data.asDto());
    }

    async getAllData() {
        const dtos = await this.dao.getAllData();
        return dtos.map(dto => new Product(dto));
    }

    async updateData(id, data) {
        return await this.dao.updateData(id, data);
    }

    async delData(data) {
        return await this.dao.delData(data);
    }
}