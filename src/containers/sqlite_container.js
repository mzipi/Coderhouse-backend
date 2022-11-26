import knex from "knex";
import options from "../options/sqlite3.js";

class SqliteContainer {

    constructor(table){
        this.knex = knex(options);
        this.table = table;
    }

    async getAll() {
        let n = await this.knex.select("*").table(this.table);
        return n;
    }

    async getById(id) {
        let n = await this.knex.select("*").table(this.table).where(id);
        return n;
    }

    async delete(id) {
        let n = await this.knex(this.table).where(id).del();
        return n;
    }

    async save(obj) {
        // obj.id = 2;
        obj.price = Number(obj.price);
        let n = await this.knex(this.table).insert(obj);
        return n;
    }

    async update(id, body){
        let n = await this.knex(this.table).where(id).update(body);
        return n;
    }

    // { error: "producto no encontrado" }
    
    close() {
        this.knex.destroy();
    }
}
export default SqliteContainer;