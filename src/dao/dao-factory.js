import { CONTAINER, NODE_ENV } from '../config/config.js';
import Carts from '../model/products-model.js';
import Products from '../model/products-model.js';
import Orders from '../model/orders-model.js';
import Users from '../model/users-model.js';

let carts, orders, products, users;

switch (NODE_ENV) {
    case 'production':
        break;
    case 'development':
        const { default: MongoAtlas } = await import('./containers/mongo-atlas.js');
        carts = new MongoAtlas(Carts);
        orders = new MongoAtlas(Orders);
        products = new MongoAtlas(Products);
        users = new MongoAtlas(Users);
        break;
    default:
        // const { default: MongoContainer } = await import('./containers/mongo-atlas.js');
        // msgDao = new MongoContainer(Msg);
        // productDao = new MongoContainer(Products);
        break;
};

export { carts, orders, products, users };