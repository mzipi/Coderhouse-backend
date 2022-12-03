import { MSG } from '../config/config.js';
import Msg from '../models/msg-model.js';

let msgDao;

switch (MSG) {
    case 'firebase':
        const { default: FirebaseContainer } = await import('./daos/FirebaseContainer.js');
        msgDao = new FirebaseContainer();
        break;
    default:
        const { default: MsgContainer } = await import('./daos/MsgContainer.js');
        msgDao = new MsgContainer(Msg);
        break;
};

export default msgDao;