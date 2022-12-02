import NegocioMsg from "../services/ServiceMsg.js";

const negocioMsg = new NegocioMsg();

async function getMsgController(req, res) {
    const messages = await negocioMsg.getMsgs();
    res.json(messages);
};

async function postMsgController(req, res) {
    const newMsg = negocioMsg.sendMsg(req.body);
    if(newMsg) return res.status(201).end();
};

async function delMsgController(req, res) {
    const delMsg = negocioMsg.deleteMsg(req.params);
    if(delMsg) return res.status(200).end();
}

export { getMsgController, postMsgController, delMsgController };