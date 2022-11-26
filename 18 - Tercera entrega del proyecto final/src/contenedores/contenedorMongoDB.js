import { MONGO_USR, MONGO_PWD, MONGO_DB, MONGO_HOST, MONGO_URL } from "../config.js";
import { MongoClient, ObjectId, Timestamp } from "mongodb";
import logger from "../api/logger.js";
import User from "../middlewares/models.js";

const uri = `mongodb+srv://${MONGO_USR}:${MONGO_PWD}@${MONGO_HOST}/${MONGO_DB}`;
const client = new MongoClient(uri);
const database = client.db(MONGO_DB);

class MongoContainer {

    constructor(table){
        this.table = table;
    }

    async getAll() {
        try {
            const docs = await database.collection("products").find().toArray();
            return docs;
        } catch (err) {
            logger.error("Hubo un error al obtener los datos");
        }
    }

    async getById(id) {
        try {
            const doc = await database.collection(this.table).findOne({ _id: ObjectId(`${id}`) });
            return doc
        } catch (err) {
            logger.error("Hubo un error al buscar");
        }
    }

    async delete(id) {
        try {
            const doc = database.collection(this.table);
            await doc.findOneAndDelete({ _id: ObjectId(`${id}`) });
        } catch (err) {
            logger.error("Hubo un error al eliminar");
        }
    }

    async deleteItem(id, id_prod) {
        try {
            const doc = database.collection(this.table);
            const query = await doc.findOne({ _id: ObjectId(`${id}`) });
            await query.findOneAndDelete({ _id: ObjectId(`${id_prod}`) });
        } catch (err) {
            logger.error("Hubo un error al eliminar item del carro");
        }
    }

    async saveProduct(obj) {
        try {
            const tabla = database.collection(this.table);
            obj.timestamp = new Timestamp();
            await tabla.insertOne(obj);
        } catch (err) {
            logger.error("Hubo un error al guardar");
        }
    }

    async saveCart(id, obj) {
        try {
            const tabla = database.collection(this.table);
            const doc = await tabla.findOne({ _id: ObjectId(`${id}`) });
            if(!doc) { 
                await doc.insertOne(obj) 
            } else { 
                await tabla.findOneAndUpdate({ _id: ObjectId(`${id}`) },
                { $set: {
                    productos: {
                        nombre: obj.productos.nombre,
                        descripcion: obj.productos.descripcion,
                        codigo: obj.productos.codigo, 
                        foto: obj.productos.foto, 
                        precio: obj.productos.precio, 
                        stock: obj.productos.stock
                    }}
                })
            }
        } catch (err) {
            logger.error("Hubo un error al guardar");
        }
    }

    async update(id, body) {
        try {
            const doc = database.collection(this.table);

            const query = await doc.findOneAndUpdate({ _id: ObjectId(`${id}`) }, 
                { $set: { 
                    nombre: body.nombre,
                    descripcion: body.descripcion,
                    codigo: body.codigo, 
                    foto: body.foto, 
                    precio: body.precio, 
                    stock: body.stock
                } });
        } catch (err) {
            logger.error("Hubo un error al actualizar");
        }
    }

    async newCart() {
        try {
            const doc = database.collection(this.table);
            doc.insertOne({ timestamp: new Timestamp() });
        } catch (err) {
            logger.error("Hubo un error al crear el carro");
        }
    }
}
export default MongoContainer;