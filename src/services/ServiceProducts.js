import { randomUUID } from 'crypto';
import { productDao } from "../daos/index.js";

class NegocioProducts {
    
    getProducts() {
        return productDao.getAll();
    }
    
    getProduct({id}) {
        return productDao.getById(id);
    }
    
    addProduct(body) {
        const verifiedData = this.checkData(body);
        const product = productDao.saveProduct(verifiedData);
        if(product) return 1;
    }
    
    updateProduct({id}) {
        
    }
    
    deleteProduct({id}) {
        productDao.delete(id);
        return 1;
    }

    checkData({ name, price, image }) {
        if (!name) throw new Error ("Falta el nombre del producto");
        if (!price) throw new Error ("Falta el precio del producto");
        if (!image) throw new Error ("Falta la imágen del producto");
        return { name, price, image };
    }
}

export default NegocioProducts;