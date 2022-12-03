import msgDao from '../persistencia/msg-factory.js';
import MsgRepo from './MsgRepo.js';
import Messages from './Messages.js';

export default class MsgService {
    constructor() {
        this.msgRepo = new MsgRepo(msgDao);
    }

    async sendMsg({body}) {
        const msg = new Messages({ ...body })
        await this.msgRepo.addMsg(msg)
        return msg.asDto()
    }

    async getMsg() {
        const msg = await this.msgRepo.getMsg()
        return msg.map(usu => usu.asDto())
    }
}