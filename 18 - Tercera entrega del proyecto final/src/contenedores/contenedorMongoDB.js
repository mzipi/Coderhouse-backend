const { MONGO_USR, MONGO_PWD, MONGO_DB, MONGO_HOST, MONGO_URL } = require("../config.js");
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${MONGO_USR}:${MONGO_PWD}@${MONGO_HOST}/${MONGO_DB}`;
const client = new MongoClient(MONGO_URL);

class MongoContainer {

    constructor(table){
        this.table = table;
    }

    async getAll() {
        try {
            const database = client.db(MONGO_DB);
            const cart = database.collection(this.table);
            ///////////////////////////////////////////
        } catch (error) {
            throw new Error(`Error al obtener datos: ${error}`)
        }
    }

    // getAll() {
    //     let n = this.knex.select("*").table(this.table);
    //     return n;
    // }

    // getById(id) {
    //     let n = this.knex.select("*").table(this.table).where(id);
    //     return n;
    // }

    // delete(id) {
    //     let n = this.knex(this.table).where(id).del();
    //     return n;
    // }

    // save(obj) {
    //     // obj.id = 2;
    //     obj.price = Number(obj.price);
    //     let n = this.knex(this.table).insert(obj);
    //     return n;
    // }

    // update(id, body){
    //     let n = this.knex(this.table).where(id).update(body);
    //     return n;
    // }
    
    // close() {
    //     this.knex.destroy();
    // }
}
module.exports = MongoContainer;