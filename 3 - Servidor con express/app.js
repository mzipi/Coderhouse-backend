const express = require('express');
const Contenedor = require('./contenedor');

const app = express();
const port = 8080;

const producto = new Contenedor('productos.txt');

let num;

app.get('/productos', (req, res) => {
    producto.getAll().then(n => res.send(n))
});
    
app.get('/productoRandom', (req, res) => {
    producto.getAll().then(n => {
        num = Math.round(Math.random() * n.length);
    })
    producto.getById(num).then(m => res.send(m));
});

app.listen(port, () => console.log(`Servidor corriendo en puerto ${port}`));