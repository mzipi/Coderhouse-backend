import Product from './Products.js';

export default class ProductsRepo {
    constructor(container) {
        this.dao = container;
    }

    async setData(data) {
        await this.dao.setData(data.asDto())
    }

    async getAllData() {
        const dtos = await this.dao.getAllData()
        return dtos.map(dto => new Product(dto))
    }

    // async updateData(data) {
    //     await this.dao.updateData(data.asDto())
    // }

    // async delData(data) {
    //     await this.dao.delData(data.asDto())
    // }
}