import Product from './Products.js';

export default class ProductsRepo {
    constructor(container) {
        this.dao = container;
    }

    // espera recibir una instancia de la clase Usuario
    async setData(data) {
        await this.dao.setData(data.asDto())
    }

    // devuelve un array de instancias de Usuario
    async getAllData() {
        const dtos = await this.dao.getAllData()
        return dtos.map(dto => new Product(dto))
    }

    async updateData(data) {
        await this.dao.updateData(data.asDto())
    }

    // devuelve un array de instancias de Usuario
    async delData(data) {
        await this.dao.delData(data.asDto())
    }
}