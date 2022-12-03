import Product from './Products.js';

export default class ProductsRepo {
    constructor(newProductsContainer) {
        this.dao = newProductsContainer
    }

    // espera recibir una instancia de la clase Usuario
    async addProduct(data) {
        await this.dao.addProduct(data.asDto())
    }

    // devuelve un array de instancias de Usuario
    async getProducts() {
        const dtos = await this.dao.getProducts()
        return dtos.map(dto => new Product(dto))
    }
}