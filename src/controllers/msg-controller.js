import MsgService from '../services/MsgService.js';

const msgService = new MsgService();

async function getMsgController(req, res) {
    const messages = await msgService.getAllData();
    res.json(messages);
};

async function postMsgController(req, res) {
    await msgService.setData(req);
    res.status(201).end();
};

async function putMsgController(req, res) {
    await msgService.updateData(req);
    res.status(201).end();
};

async function deleteMsgController(req, res) {
    await msgService.delData(req);
    res.status(201).end();
};

export { getMsgController, postMsgController, putMsgController, deleteMsgController };