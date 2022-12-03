import { errorLog } from '../../api/logger.js';

export default class MsgContainer {

    constructor(model){
        this.model = model;
    }

    async getMsg() {
        try {
            return await this.model.find();
        } catch (err) {
            errorLog.error('Error al obtener los mensajes: ' + err);
        }
    }

    async sendMsg(dto) {
        try {
            return await this.model.create(dto);
        } catch (err) {
            errorLog.error('Error al guardar mensaje: ' + err);
        }
    }
};