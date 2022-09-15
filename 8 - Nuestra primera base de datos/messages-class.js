const knex = require('knex');

class Contenedor {

    // constructor(config, table){
    constructor(config){
        this.knex = knex(config);
        // this.table = table;
    }

    getAll() {
        let n = this.knex.select('*').table('messages');
        return n;
    }

    getById(id) {
        let n = this.knex.select('*').table('messages').where(id);
        return n;
    }

    delete(id) {
        let n = this.knex('messages').where(id).del();
        return n;
    }

    save(obj) {
        obj.id = Number(obj.id);
        obj.price = Number(obj.price);
        let n = this.knex('messages').insert(obj);
        return n;
    }

    update(id, body){
        let n = this.knex('messages').where(id).update(body);
        return n;
    }
    
    close() {
        this.knex.destroy();
    }
}
module.exports = Contenedor;