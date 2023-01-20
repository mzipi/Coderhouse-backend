import { CONTAINER, NODE_ENV } from '../config/config.js';
import Carts from '../model/products-model.js';
import Images from '../model/images-model.js';
import Products from '../model/products-model.js';
import Orders from '../model/orders-model.js';
import Users from '../model/users-model.js';

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
        cartsDao = new MongoAtlas(Carts);
        imagesDao = new MongoAtlas(Images);
        ordersDao = new MongoAtlas(Orders);
        productsDao = new MongoAtlas(Products);
        usersDao = new MongoAtlas(Users);
        break;
};

export { cartsDao, imagesDao, ordersDao, productsDao, usersDao };