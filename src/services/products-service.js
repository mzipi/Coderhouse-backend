import crypto from 'crypto'
import { products } from '../dao/dao-factory.js';
import ProductsRepository from '../repositories/products-repository.js';
import Product from '../dto/create-product-dto.js';

function generarId() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class ProductsService {
    constructor() {
        this.productsRepository = new ProductsRepository(products);
    }

    async setData({body}) {
        const product = new Product({
            id: generarId(),
            ...body
        });
        await this.productsRepository.setData(product);
        return product.asDto();
    }

    async getData({params}) {
        if(params.id) {
            return await this.productsRepository.getData(params.id);
        } else {
            const data = await this.productsRepository.getData();
            return data.map(product => product.asDto());
        }
    }

    async updateData({id, body}) {
        return await this.productsRepository.updateData(id, body);
    }

    async deleteData({params}) {
        return await this.productsRepository.deleteData(params.id);
    }
}