import productDao from '../persistencia/products-factory.js';
import ProductsRepo from './ProductsRepo.js';
import Product from './Products.js';

export default class ProductsService {
    constructor() {
        this.productsRepo = new ProductsRepo(productDao);
    }

    async addProduct({body}) {
        const product = new Product({ ...body })
        await this.productsRepo.addProduct(product)
        return product.asDto()
    }

    async getProducts() {
        const products = await this.productsRepo.getProducts()
        return products.map(usu => usu.asDto())
    }
}