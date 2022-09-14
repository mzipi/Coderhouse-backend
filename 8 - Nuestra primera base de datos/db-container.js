const knex = require('knex');

// knex.schema.createTable('cars', table => {
//     table.increments('id')
//     table.string('name')
//     table.integer('price')
// })
//     .then(() => console.log('table created'))
//     .catch((err) => {
//         console.log(err);
//         throw err
//     })
//     .finally(() => knex.destroy());

class Contenedor {

    constructor(config){
        this.knex = knex(config);
    }

    async newCart() {
        const file = await this.getAll();
        let id = file.length + 1;
        let cart = { 
            id,
            products: [],
            timestamp: Date.now()
         };
        file.push(cart)
        await fs.writeFile(this.path, JSON.stringify(file));
        return id;
    }

    async add(id, body) {
        const file = await this.getAll();
        let cart = file.find(n => n.id == Number(id));
        let item = cart.products.filter(n => n.id == body.id);
        if(!item || item.length < 1) {
            cart = {
                ...cart,
                products: [ body ]
            }
        }
        let newCart = file.filter(n => n.id != Number(id));
        newCart.push(cart);
        await fs.writeFile(this.path, JSON.stringify(newCart));
    }

    async getById(id) {
        const file = await this.getAll();
        let cart = file.find(n => n.id == Number(id));
        return cart.products;
    }

    async getAll() {
        try {
            const data = await fs.readFile(this.path, 'utf-8');
            return JSON.parse(data);
        } catch (err) {
            return []
        }
    }

    async deleteItem(id, id_prod) {
        const file = await this.getAll();
        let cart = file.find(n => n.id == Number(id));
        let item = cart.products.filter(n => n.id != Number(id_prod));
        cart.products = item;
        let newCart = file.filter(n => n.id != Number(id));
        newCart.push(cart);
        await fs.writeFile(this.path, JSON.stringify(newCart));
    }

    async deleteCart(id) {
        const file = await this.getAll();
        let cart = file.filter(n => n.id !== Number(id));
        await fs.writeFile(this.path, JSON.stringify(cart));
    }
    
    close() {
        this.knex.destroy();
    }
}
module.exports = Contenedor;