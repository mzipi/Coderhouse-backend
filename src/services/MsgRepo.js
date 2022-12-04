import Messages from './Messages.js';

export default class MsgRepo {
    constructor(msgDao) {
        this.dao = msgDao;
    }

    async setData(data) {
        await this.dao.setData(data.asDto())
    }

    async getAllData() {
        const dtos = await this.dao.getAllData()
        return dtos.map(dto => new Messages(dto))
    }

    // async updateData(data) {
    //     const msg = new Messages({...data})
    //     await this.dao.updateData(data.asDto(msg))
    // }

    // async delData(data) {
    //     const msg = new Messages(data.id)
    //     await this.dao.delData(msg.asDto(data.id))
    // }
}