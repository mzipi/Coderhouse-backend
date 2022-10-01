import knex from 'knex';

class Contenedor {

    constructor(config, table){
        this.knex = knex(config);
        this.table = table;
    }

    getAll() {
        let n = this.knex.select('*').table(this.table);
        return n;
    }

    save(obj) {
        obj.date = 150920221820;
        let n = this.knex(this.table).insert(obj);
        return n;
    }
}
export default Contenedor;