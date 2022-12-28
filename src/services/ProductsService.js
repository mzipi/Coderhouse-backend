import crypto from 'crypto'
import { productDao } from '../persistencia/dao-factory.js';
import ProductsRepo from './ProductsRepo.js';
import Product from './Products.js';

function generarId() {
    const id = crypto.randomBytes(10).toString('hex');
    return id;
}

export default class ProductsService {
    constructor() {
        this.productsRepo = new ProductsRepo(productDao);
    }

    async setData({body}) {
        const product = new Product({
            id: generarId(),
            ...body
        })
        await this.productsRepo.setData(product)
        return product.asDto()
    }

    async getAllData() {
        const products = await this.productsRepo.getAllData()
        return products.map(usu => usu.asDto())
    }

    async updateData({params, body}) {
        return await this.productsRepo.updateData(params.id, body);
    }

    async delData({params}) {
        return await this.productsRepo.delData(params.id)
    }
    // async updateData({body}) {
    //     const product = new Product({ ...body })
    //     await this.productsRepo.updateData(product)
    //     return product.asDto()
    // }

    // async delData({body}) {
    //     const product = new Product({ ...body })
    //     await this.productsRepo.delData(product)
    //     return product.asDto()
    // }
}