class Usuario {
    // constructor(col){
    //     this.col = col
    // }
    
    save(obj){
        let id = 0;
        obj.id = id++;
        this.productos.push(obj);
    }
    getAll(){
        return this.productos;
    }
    getById(id){
        const data = this.getAll();
        const item = data.find(element => `${element.id}` === id);
        if(item) {
            return [item];
        } 
    }
    update(id, obj){
        const data = this.getAll();
        data.forEach(p => {
                if(`${p.id}`== id){
                    p.id = obj.id;
                    p.title = obj.title;
                    p.price = obj.price;
                    p.thumbnail = obj.thumbnail;
                }
            }
        )
    }
    deleteById(id){
        const data = this.getAll();
        const item = data.filter(element => element.id != id);
        return item
    }
}