const knex = require('knex');

class Contenedor {

    constructor(config, table){
        this.knex = knex(config);
        // this.table = table;
    }

    getAll() {
        let n = this.knex.select('*').table('products');
        return n;
    }

    getById(id) {
        let n = this.knex.select('*').table('products').where(id);
        return n;
    }

    delete(id) {
        let n = this.knex('products').where(id).del();
        return n;
    }

    save(obj) {
        obj.id = Number(obj.id);
        obj.price = Number(obj.price);
        let n = this.knex('products').insert(obj);
        return n;
    }

    update(id, body){
        let n = this.knex('products').where(id).update(body);
        return n;
    }
    
    close() {
        this.knex.destroy();
    }
}
module.exports = Contenedor;