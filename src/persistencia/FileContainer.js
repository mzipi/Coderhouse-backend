const fs = require('fs/promises');

class Contenedor {

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
            await fs.writeFile(this.path, JSON.stringify(newFile));
        } catch (err) {
            console.error("Hubo un error al guardar el archivo\n", err);
        }
        return id;
    }

    async getById(id) {
        const data = await this.getAll();
        const item = data.find(element => element.id === id);
        if(item) {
            return item;
        } else {
            console.log("No se encuentra ese item");
        }
    }

    async getAll() {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        } catch (err) {
            return []
        }
    }

    async deleteById(id) {
        const data = await this.getAll();
        const item = data.filter(element => element.id != id);
        try {
            await fs.writeFile(this.path, JSON.stringify(item));
        } catch (err) {
            console.log("Ocurrio un error al borrar el producto\n", err);
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.path, "[]");
        } catch (err) {
            console.error("Ocurrio un error al vaciar el archivo\n", err);
        }
    }
}
module.exports = Contenedor;