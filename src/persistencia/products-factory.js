import { PRODUCT } from '../config/config.js';
import Products from '../models/products-model.js';

let productDao;

switch (PRODUCT) {
    case 'firebase':
        const { default: FirebaseContainer } = await import('./daos/FirebaseContainer.js');
        productDao = new FirebaseContainer();
        break;
    default:
        const { default: ProductsContainer } = await import('./daos/ProductsContainer.js');
        productDao = new ProductsContainer(Products);
        break;
};

export default productDao;