import { msgDao } from '../persistencia/dao-factory.js';
import MsgRepo from './MsgRepo.js';
import Messages from './Messages.js';

export default class MsgService {
    constructor() {
        this.msgRepo = new MsgRepo(msgDao);
    }

    async setData({body}) {
        const msg = new Messages({...body})
        await this.msgRepo.setData(msg)
        return msg.asDto()
    }

    async getAllData() {
        const msg = await this.msgRepo.getAllData()
        return msg.map(usu => usu.asDto())
    }

    // async updateData({body}) {
    //     const msg = new Messages({ ...body })
    //     await this.msgRepo.updateData(msg.asDto(body))
    // }

    // async delData({body}) {
    //     const msg = new Messages(body.id)
    //     await this.msgRepo.delData(msg.asDto(body.id))
    // }
}