import express, { urlencoded, json } from 'express';
const app = express();
import products from './router/routerMongoProductos.js';
import cart from './router/routerMongoCarro.js';

const port = process.env.port || 8080;
let admin = false;

app.use(urlencoded({extended: true}));
app.use(json());
app.use('/api/productos', products);
app.use('/api/carrito', cart);

app.listen(port);