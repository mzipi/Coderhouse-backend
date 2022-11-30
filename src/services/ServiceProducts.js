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
        this.addId(verifiedData);
        const product = productDao.saveProduct(verifiedData);
        if(product) return 1;
    }
    
    updateProduct({id}) {
        
    }
    
    deleteProduct({id}) {
        productDao.delete(id);
        return 1;
    }

    checkData(body) {
        if (body.name) return nombre = body.nombre;
        if (body.price) return price = body.price;
        if (body.image) return image = body.image;
        return { nombre, price, image }
    }

    addId(obj) {
        obj.id = randomUUID();
        return obj;
    }
}

export default NegocioProducts;