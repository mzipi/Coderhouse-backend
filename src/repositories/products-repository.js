import Product from '../dto/create-product-dto.js';

export default class ProductsRepository {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.setData(data.asDto());
    }

    async getData() {
        const dtos = await this.dao.getData();
        return dtos.map(dto => new Product(dto));
    }

    async updateData(id, data) {
        return await this.dao.updateData(id, data);
    }

    async deleteData(data) {
        return await this.dao.deleteData(data);
    }
}