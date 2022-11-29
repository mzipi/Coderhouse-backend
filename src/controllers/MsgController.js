import NegocioMsg from "../negocio/NegocioMsg.js";

const negocioMsg = new NegocioMsg();

async function getMsgController(req, res) {
    const messages = await negocioMsg.getMsgs();
    res.json(messages);
};

async function postMsgController(req, res) {
    const newMsg = negocioMsg.sendMsg(req.body);
    if(newMsg === 1) res.status(201);
};

export { getMsgController, postMsgController };