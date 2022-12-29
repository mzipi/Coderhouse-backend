import { Injectable } from '@nestjs/common';
import { Products } from '../interfaces/products.interface'

@Injectable()
export class ProductsService {
    private readonly products: Products[] = [];

    create(product: Products) {
        this.products.push(product);
    }

    findAll(): Products[] {
        return this.products;
    }
}
