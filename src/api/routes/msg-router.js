import { Router } from 'express';
import { getMsgController, postMsgController, putMsgController, deleteMsgController } from '../../controllers/msg-controller.js';

const msgRouter = new Router();

msgRouter.get('/', getMsgController);
msgRouter.post('/', postMsgController);
msgRouter.put('/:id', putMsgController);
msgRouter.delete('/:id', deleteMsgController);

export default msgRouter;