use ecommerce
db.createCollection("mensajes")
db.createCollection("productos")
// 1
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
    },
    {
        email: "michell@zipitria", 
        msg: "otro mensaje en mongo", 
        date: 160920221843
    },
    {
        email: "backend@coder", 
        msg: "que tal?", 
        date: 160920221844
    },
    {
        email: "test@test", 
        msg: "hola de nuevo en mongodb", 
        date: 160920221843
    },
    {
        email: "backend@coder", 
        msg: "hola, esto es un test en mongo", 
        date: 160920221844
    },
    {
        email: "test@test", 
        msg: "otro mensaje en mongo", 
        date: 160920221843
    },
    {
        email: "backend@coder", 
        msg: "otro mensaje en mongo", 
        date: 160920221844
    },
    {
        email: "test@test", 
        msg: "hola, esto es un test en mongo", 
        date: 160920221843
    },
    {
        email: "backend@coder", 
        msg: "otro mensaje en mongo", 
        date: 160920221844
    }
])
db.productos.insert([
    {
        id: 1,
        name: "Coca-cola", 
        price: 125, 
        image: 'http://google.com'
    },
    {
        id: 2,
        name: "Pepsi", 
        price: 250, 
        image: 'http://google.com'
    },
    {
        id: 3,
        name: "Coca-cola", 
        price: 450, 
        image: 'http://google.com'
    },
    {
        id: 4,
        name: "Pepsi", 
        price: 500, 
        image: 'http://google.com'
    },
    {
        id: 5,
        name: "Coca-cola", 
        price: 1000, 
        image: 'http://google.com'
    },
    {
        id: 6,
        name: "Pepsi", 
        price: 1250, 
        image: 'http://google.com'
    },
    {
        id: 7,
        name: "Coca-cola", 
        price: 2750, 
        image: 'http://google.com'
    },
    {
        id: 8,
        name: "Pepsi", 
        price: 3000, 
        image: 'http://google.com'
    },
    {
        id: 9,
        name: "Coca-cola", 
        price: 3500, 
        image: 'http://google.com'
    },
    {
        id: 10,
        name: "Pepsi", 
        price: 5000, 
        image: 'http://google.com'
    }
])
// 3
db.mensajes.find()
db.productos.find()
// 4
db.mensajes.countDocuments()
db.productos.countDocuments()
// 5a
db.productos.insert([
    {
        id: 11,
        name: "Pepsi", 
        price: 4250, 
        image: 'http://google.com'
    }
])
// 5b i
db.productos.find({price: {$lt: 1000}})
// 5b ii
db.productos.find({$and: [{price: {$gt: 1000}},{price: {$lt: 3000}}]})
// 5b iii
db.productos.find({price: {$gt: 3000}})
// 5b iv
db.productos.find({},{name: 1}).sort({price: 1}).skip(2).limit(1)
// 5c
db.productos.updateMany({price: {$gt: 0}},{$set: {stock: 100}})
// 5d
db.productos.updateMany({price: {$gt: 4000}},{$set: {stock: 0}})
// 5e
db.productos.deleteMany({price: {$lt: 1000}})
// 6
use admin
db.createUser({"user": "pepe", "pwd": "asd456", "roles": [{role: "read", db: "ecommerce"}]})
mongosh -u pepe -p asd456
use ecommerce
db.productos.find()
db.productos.insert([
    {
        id: 12,
        name: "Pepsi", 
        price: 250, 
        image: 'http://google.com'
    }
])