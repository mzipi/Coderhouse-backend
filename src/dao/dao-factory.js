import { CONTAINER, NODE_ENV } from '../config/config.js';
// import Msg from '../models/msg-model.js';
import Products from '../model/products-model.js';

let msgDao, productDao;

switch (NODE_ENV) {
    case 'development':
        break;
    case 'production':
        const { default: MongoAtlas } = await import('./containers/mongo-atlas.js');
        // msgDao = new MongoContainer(Msg);
        productDao = new MongoAtlas(Products);
        break;
    default:
        const { default: MongoContainer } = await import('./containers/mongo-atlas.js');
        // msgDao = new MongoContainer(Msg);
        productDao = new MongoContainer(Products);
        break;
};

export { msgDao, productDao };