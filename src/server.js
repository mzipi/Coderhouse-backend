import express, { json, urlencoded } from "express";
import cartsRouter from "./carts/carts-router.js";
import ordersRouter from "./orders/orders-router.js";
import productsRouter from "./products/products-router.js";
import usersRouter from "./users/users-router.js";

const app = express();
let admin = false;

app.use(json());
app.use(urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api/shoppingcartproducts', cartsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

export default app;