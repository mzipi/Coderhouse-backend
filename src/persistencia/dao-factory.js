import { CONTAINER } from '../config/config.js';
import Msg from '../models/msg-model.js';
import Products from '../models/products-model.js';

let msgDao, productDao;

switch (CONTAINER) {
    // case 'firebase':
    //     const { default: FirebaseContainer } = await import('./daos/FirebaseContainer.js');
    //     msgDao = new FirebaseContainer();
    //     productDao = new FirebaseContainer(Products);
    //     break;
    default:
        const { default: MongoContainer } = await import('./daos/MongoContainer.js');
        msgDao = new MongoContainer(Msg);
        productDao = new MongoContainer(Products);
        break;
};

export { msgDao, productDao };