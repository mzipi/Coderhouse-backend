import crypto from 'crypto'
import { carts } from '../dao/dao-factory.js';
import CartRepository from '../repositories/carts-repository.js';
import Cart from '../dto/create-cart-dto.js';

function idGenerator() {
    const id = crypto.randomBytes(10).toString('hex')
    return id;
}

export default class CartsService {
    constructor() {
        this.cartRepository = new CartRepository(carts);
    }

    async setData({body}) {
        const cart = new Cart({
            id: idGenerator(),
            ...body
        });
        await this.cartRepository.setData(cart);
        return cart.asDto();
    }

    async getData() {
        const carts = await this.cartRepository.getData();
        return carts.map(cart => cart.asDto());
    }
    
    async deleteData({id}) {
        return await this.cartRepository.delData(id);
    }
}