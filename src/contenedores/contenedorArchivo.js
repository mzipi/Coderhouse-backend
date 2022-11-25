import { writeFile, readFile } from "fs/promises";
import logger from "../api/logger.js";

class FileContainer {

    constructor(path){
        this.path = path;
    }

    async save(obj) {
        const file = await this.getAll();
        let id;
        const length = file.length;
        const lastItem = file[length - 1];
        if(file.length > 0) {
            id = lastItem.id + 1;
        } else {
            id = 1;
        }
        obj = { 
            ...obj, 
            id
        }
        const newFile = [ ...file, obj ];
        try {
            await writeFile(this.path, JSON.stringify(newFile));
        } catch (err) {
            logger.error("Hubo un error al guardar el archivo\n", err);
        }
        return id;
    }

    async getById(id) {
        const data = await this.getAll();
        const item = data.find(element => `${element.id}` === id);
        if(item) {
            return [item];
        } else {
            logger.info("No se encuentra ese item");
        }
    }

    async getAll() {
        try {
            const data = await readFile(this.path, "utf-8");
            return JSON.parse(data);
        } catch (err) {
            return []
        }
    }

    async deleteById(id) {
        const data = await this.getAll();
        const item = data.filter(element => element.id != id);
        try {
            await writeFile(this.path, JSON.stringify(item));
        } catch (err) {
            logger.error("Ocurrio un error al borrar el producto\n", err);
        }
    }

    
    async update(id, obj){
        const data = await this.getAll();
        data.forEach(p => {
                if(`${p.id}`== id){
                    p.id = obj.id;
                    p.title = obj.title;
                    p.price = obj.price;
                    p.thumbnail = obj.thumbnail;
                }
            }
        )
        try {
            await writeFile(this.path, JSON.stringify(data));
        } catch (err) {
            logger.error("Ocurrio un error al actualizar el producto\n", err);
        }
        // return data;
    }

    async deleteAll() {
        try {
            await writeFile(this.path, "[]");
        } catch (err) {
            logger.error("Ocurrio un error al vaciar el archivo\n", err);
        }
    }
}
export default FileContainer;