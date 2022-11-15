const fs = require("fs/promises");

class Contenedor {

    constructor(path){
        this.path = path;
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
            const data = await fs.readFile(this.path, "utf-8");
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
}
module.exports = Contenedor;