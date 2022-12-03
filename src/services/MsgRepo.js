import Messages from './Messages.js';

export default class MsgRepo {
    constructor(newMsgContainer) {
        this.dao = newMsgContainer
    }

    async sendMsg(data) {
        await this.dao.sendMsg(data.asDto())
    }

    async getMsg() {
        const dtos = await this.dao.getMsg()
        return dtos.map(dto => new Messages(dto))
    }
}