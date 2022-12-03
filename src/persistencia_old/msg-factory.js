import { MSG } from '../config/config.js';
import Msg from '../models/msg-model.js';

let msgDao;

switch (MSG) {
    case 'firebase':
        const { default: FirebaseContainer } = await import('./daos/FirebaseContainer.js');
        msgDao = new FirebaseContainer();
        break;
    default:
        const { default: MongoContainer } = await import('./daos/MongoContainer.js');
        msgDao = new MongoContainer('messages', Msg);
        break;
};

export default msgDao;