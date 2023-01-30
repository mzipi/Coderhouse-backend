import { NODE_ENV } from '../config/config.js';

import Carts from '../models/carts-model.js';
import Products from '../models/products-model.js';
import Orders from '../models/orders-model.js';
import Users from '../models/users-model.js';

let cartsDao, productsDao, ordersDao, usersDao;

switch (NODE_ENV) {
    case 'production':
        // const { default: ProductsContainer } = await import('./containers/products-container.js');
        // const { default: UsersContainer } = await import('./containers/users-container.js');
        // const { default: CartsRemoteContainer } = await import('./containers/carts-container.js');
        // const { default: OrdersRemoteContainer } = await import('./containers/orders-container.js');
        // cartsDao = new CartsRemoteContainer(Carts);
        // productsDao = new ProductsContainer(Products);
        // ordersDao = new OrdersRemoteContainer(Orders);
        // usersDao = new UsersContainer(Users);
        break;
    default:
        const { default: ProductsContainer } = await import('./containers/products-container.js');
        const { default: UsersContainer } = await import('./containers/users-container.js');
        const { default: CartsRemoteContainer } = await import('./containers/carts-container.js');
        const { default: OrdersRemoteContainer } = await import('./containers/orders-container.js');
        cartsDao = new CartsRemoteContainer(Carts);
        productsDao = new ProductsContainer(Products);
        ordersDao = new OrdersRemoteContainer(Orders);
        usersDao = new UsersContainer(Users);
        break;
};

export { cartsDao, productsDao, ordersDao, usersDao };