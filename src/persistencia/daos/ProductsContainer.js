// import { ObjectId } from 'mongodb';
import { errorLog } from '../../api/logger.js';

export default class ProductsContainer {

    constructor(/*table,*/ model){
        // this.table = table;
        this.model = model;
    }

    async getProducts() {
        try {
            return await this.model.find();
        } catch (err) {
            errorLog.error('Error al obtener los productos: ' + err);
        }
    }

    async addProduct(dto) {
        try {
            return await this.model.create(dto);
        } catch (err) {
            errorLog.error('Error al guardar producto: ' + err);
        }
    }

    // async getById(id) {
    //     try {
    //         const doc = await this.model.findOne({ _id: ObjectId(`${id}`) });
    //         if (doc) {
    //             return doc;
    //         } else {
    //             return { error: 'producto no encontrado' };
    //         }
    //     } catch (err) {
    //         { error: 'producto no encontrado'};
    //     }
    // }

    // async delete(id) {
    //     try {
    //         await this.model.findOneAndDelete({ _id: ObjectId(`${id}`) });
    //     } catch (err) {
    //         errorLog.error('Hubo un error al eliminar');
    //     }
    // }

    // async deleteItem(id, id_prod) {
    //     try {
    //         await this.model.findOneAndDelete({ _id: ObjectId(`${id_prod}`) });
    //     } catch (err) {
    //         errorLog.error('Hubo un error al eliminar item del carro');
    //     }
    // }

    // async update(id, body) {
    //     try {
    //         await this.model.findOneAndUpdate({ _id: ObjectId(`${id}`) }, 
    //             { $set: { 
    //                 nombre: body.nombre,
    //                 descripcion: body.descripcion,
    //                 codigo: body.codigo, 
    //                 foto: body.foto, 
    //                 precio: body.precio, 
    //                 stock: body.stock
    //             } });
    //     } catch (err) {
    //         errorLog.error('Hubo un error al actualizar');
    //     }
    // }
};