class ContenedorMemoriaProductos {
    miId=0;
    constructor(){
        this.productos=[];
    }
    getAll(){
        return this.productos;
    }
    getOne(id){
        let obj = this.productos;
        let miObj = obj.filter(p=>p.id==Number(id))
        return miObj;
    }
    addOne(obj){
        this.miId++;
        obj.id=this.miId;
        this.productos=[...this.productos,obj];
        return obj
    }
    updateOne(id,obj){
        this.productos.forEach(p=>{
            if(p.id==Number(id)){
                if(obj.id) {
                    p.id=obj.id;
                }
                if(obj.title) {
                    p.title=obj.title;
                }
                if(obj.price) {
                    p.price=obj.price;
                }
                if(obj.thumbnail) {
                    p.thumbnail=obj.thumbnail;
                }
            }
        })
        return this.productos;
    }
    deleteOne(id){
        let obj = this.productos.filter(p=>p.id != Number(id));
        this.productos=obj
        return obj
    }
}
export default ContenedorMemoriaProductos;