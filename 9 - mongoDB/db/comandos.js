use ecommerce
db.createCollection("mensajes")
db.createCollection("productos")
db.mensajes.insert([
    {
        email: "test@test", 
        msg: "hola, esto es un test en mongo", 
        date: 160920221843
    },
    {
        email: "backend@coder", 
        msg: "hola de nuevo en mongodb", 
        date: 160920221844
    }
])
db.productos.insert([
    {
        name: "test@test", 
        price: "hola, esto es un test en mongo", 
        image: 160920221843
    },
    {
        name: "backend@coder", 
        price: "hola de nuevo en mongodb", 
        image: 160920221844
    }
])