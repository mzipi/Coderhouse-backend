import { msgDao } from "../daos/index.js";

class NegocioMsg {
    
    getMsgs() {
        return msgDao.getAll();
    }
    
    sendMsg(body) {
        const verifiedData = checkData(body);
        if(verifiedData) return 1;
    }
}

function checkData(body) {
    if (body.author.nombre) return nombre = body.author.nombre;
    if (body.author.lastname) return lastname = body.author.lastname;
    if (body.author.alias) return alias = body.author.alias;
    if (body.author.age) return age = body.author.age;
    if (body.author.email) return email = body.author.email;
    if (body.author.avatar) return avatar = body.author.avatar;
    if (body.text) return text = body.author.text;
    return { nombre, lastname, alias, age, email, avatar, text }
}

export default NegocioMsg;