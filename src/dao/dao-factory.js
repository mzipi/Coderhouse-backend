import { CONTAINER } from '../config/config.js';
// import Msg from '../models/msg-model.js';
import Products from '../schemas/products-schema.js';

let msgDao, productDao;

switch (CONTAINER) {
    // case 'firebase':
    //     const { default: FirebaseContainer } = await import('./daos/FirebaseContainer.js');
    //     msgDao = new FirebaseContainer();
    //     productDao = new FirebaseContainer(Products);
    //     break;
    default:
        const { default: MongoContainer } = await import('./containers/mongo-atlas.js');
        // msgDao = new MongoContainer(Msg);
        productDao = new MongoContainer(Products);
        break;
};

export { msgDao, productDao };