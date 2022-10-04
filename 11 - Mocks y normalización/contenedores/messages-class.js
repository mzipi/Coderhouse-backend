// import knex from 'knex';
import admin from "firebase-admin";
import { serviceAccount } from "../coder-backend-a3fcf-firebase-adminsdk-9ug8w-cd644304ba.json";
// var admin = require("firebase-admin");
// var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


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