import crypto from 'crypto'
import { productDao } from '../dao/dao-factory.js';
import ProductsRepository from '../repositories/products-repository.js';
import Product from '../dto/create-product-dto.js';

function generarId() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class ProductsService {
    constructor() {
        this.productsRepository = new ProductsRepository(productDao);
    }

    async setData({body}) {
        const product = new Product({
            id: generarId(),
            ...body
        });
        await this.productsRepository.setData(product);
        return product.asDto();
    }

    async getData() {
        const products = await this.productsRepository.getData();
        return products.map(product => product.asDto());
    }

    async updateData({id, body}) {
        return await this.productsRepository.updateData(id, body);
    }

    async deleteData({id}) {
        return await this.productsRepository.deleteData(id);
    }
}