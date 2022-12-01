import { MONGO_URL2, MONGO_DB } from "../config/config.js";
import { MongoClient, ObjectId } from "mongodb";
import { errorLog } from "../api/logger.js";

const uri = MONGO_URL2;
const client = new MongoClient(uri);
const database = client.db(MONGO_DB);

class MongoContainer {

    constructor(table, model){
        this.table = table;
        this.model = model;
    }

    async getAll() {
        try {
            // const col = database.collection(this.table);
            const docs = await this.model.find();
            return docs;
        } catch (err) {
            errorLog.error("Hubo un error al obtener los datos");
        }
    }

    async getById(id) {
        try {
            const doc = await this.model.findOne({ _id: ObjectId(`${id}`) });
            if (doc) {
                return doc;
            } else {
                return { error: "producto no encontrado" };
            }
        } catch (err) {
            { error: "producto no encontrado"};
        }
    }

    async delete(id) {
        try {
            await this.model.findOneAndDelete({ _id: ObjectId(`${id}`) });
        } catch (err) {
            errorLog.error("Hubo un error al eliminar");
        }
    }

    async deleteItem(id, id_prod) {
        try {
            await this.model.findOneAndDelete({ _id: ObjectId(`${id_prod}`) });
        } catch (err) {
            errorLog.error("Hubo un error al eliminar item del carro");
        }
    }

    async saveProduct(obj) {
        try {
            return await this.model.create(obj);
        } catch (err) {
            errorLog.error("Hubo un error al guardar");
        }
    }

    async update(id, body) {
        try {
            await this.model.findOneAndUpdate({ _id: ObjectId(`${id}`) }, 
                { $set: { 
                    nombre: body.nombre,
                    descripcion: body.descripcion,
                    codigo: body.codigo, 
                    foto: body.foto, 
                    precio: body.precio, 
                    stock: body.stock
                } });
        } catch (err) {
            errorLog.error("Hubo un error al actualizar");
        }
    }
}
export default MongoContainer;