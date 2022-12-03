import MsgService from '../services/MsgService.js';

const msgService = new MsgService();

async function getMsgController(req, res) {
    const messages = await msgService.getMsg();
    res.json(messages);
};

async function postMsgController(req, res) {
    const newMsg = msgService.sendMsg(req);
    if(newMsg) return res.status(201).end();
};

export { getMsgController, postMsgController };