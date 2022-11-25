const express = require('express');
const app = express();
const products = require('./routes/products');
const cart = require('./routes/cart');

const port = process.env.port || 8080;
let admin = false;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/productos', products);
app.use('/api/carrito', cart);

app.listen(port);