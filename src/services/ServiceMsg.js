import { msgDao } from "../daos/index.js";

class NegocioMsg {
    
    getMsgs() {
        return msgDao.getAll();
    }
    
    sendMsg(body) {
        const verifiedData = this.checkData(body);
        const msg = msgDao.saveProduct(verifiedData);
        if(msg) return 1;
    }
    
    deleteMsg(params) {
        const delMsg = msgDao.delete(params.id);
        if (delMsg) return 1;
    }

    checkData({author, text}) {
        if (!author.name) throw new Error ("Falta el nombre del autor del mensaje");
        if (!author.lastname) throw new Error ("Falta el apellido del autor del mensaje");
        if (!author.nick) throw new Error ("Falta el apellido del autor del mensaje");
        if (!author.age) throw new Error ("Falta la edad del autor del mensaje");
        if (!author.email) throw new Error ("Falta el email del autor del mensaje");
        if (!author.avatar) throw new Error ("Falta el avatar del autor del mensaje");
        if (!text) throw new Error ("Falta el mensaje");
        return { author, text }
    }
}

export default NegocioMsg;