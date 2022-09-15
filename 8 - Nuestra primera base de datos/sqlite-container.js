const knexLib = require('knex');

class Contenedor {

    constructor(config, name){
        this.knex = knexLib(config);
    }

    async save(obj) {
        obj.price = Number(obj.price)
        await knex('products').insert(obj)

        // const file = await this.getAll();
        // let id;
        // const length = file.length;
        // const lastItem = file[length - 1];
        // if(file.length > 0) {
        //     id = lastItem.id + 1;
        // } else {
        //     id = 1;
        // }
        // obj = { 
        //     ...obj, 
        //     id
        // }
        // const newFile = [ ...file, obj ];
        // try {
        //     await fs.writeFile(this.path, JSON.stringify(newFile));
        // } catch (err) {
        //     console.error("Hubo un error al guardar el archivo\n", err);
        // }
        // return id;
    }

    async crear(){
        await this.knex.schema.createTable('products', function(table) {
            table.string('name')
            table.integer('price')
            table.string('image')
        })
    }

    async getById(id) {
        try {
            const products = await knex
                .from('productos')
                .select('name', 'price', 'image')
                .where(id)
            return products;
        } catch (err) {
            
        }
    }

    async getAll() {
        try {
            const products = await knex.from('products').select('name', 'price', 'image')
            return products;
        } catch (err) {
            return []
        }
    }
    
    close() {
        this.knex.destroy();
    }
}
module.exports = Contenedor;