import { CONTAINER, NODE_ENV } from '../config/config.js';
import Carts from '../models/carts-model.js';
import Images from '../models/images-model.js';
import Products from '../models/products-model.js';
import Orders from '../models/orders-model.js';
import Users from '../models/users-model.js';

let cartsDao, imagesDao, ordersDao, productsDao, usersDao;

switch (NODE_ENV) {
    case 'production':
        // const { default: MongoAtlas } = await import('./containers/mongodb.js');
        // cartsDao = new MongoAtlas(Carts);
        // imagesDao = new MongoAtlas(Images);
        // ordersDao = new MongoAtlas(Orders);
        // productsDao = new MongoAtlas(Products);
        // usersDao = new MongoAtlas(Users);
        break;
    default:
        const { default: MongoAtlas } = await import('./containers/mongo-atlas.js');
        const { default: UsersContainer } = await import('./containers/users-container.js');
        cartsDao = new MongoAtlas(Carts);
        imagesDao = new MongoAtlas(Images);
        ordersDao = new MongoAtlas(Orders);
        productsDao = new MongoAtlas(Products);
        usersDao = new UsersContainer(Users);
        break;
};

export { cartsDao, imagesDao, ordersDao, productsDao, usersDao };