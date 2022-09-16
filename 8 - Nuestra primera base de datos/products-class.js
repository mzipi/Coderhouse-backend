const knex = require('knex');

class Contenedor {

    constructor(config, table){
        this.knex = knex(config);
        this.table = table;
    }

    getAll() {
        let n = this.knex.select('*').table(this.table);
        return n;
    }

    getById(id) {
        let n = this.knex.select('*').table(this.table).where(id);
        return n;
    }

    delete(id) {
        let n = this.knex(this.table).where(id).del();
        return n;
    }

    save(obj) {
        // obj.id = 2;
        obj.price = Number(obj.price);
        let n = this.knex(this.table).insert(obj);
        return n;
    }

    update(id, body){
        let n = this.knex(this.table).where(id).update(body);
        return n;
    }
    
    close() {
        this.knex.destroy();
    }
}
module.exports = Contenedor;