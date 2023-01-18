import express, { json, urlencoded } from "express";

import cartsRouter from "./carts/carts-router.js";
import ordersRouter from "./orders/orders-router.js";
import productsRouter from "./products/products-router.js";
import usersRouter from "./users/users-router.js";
import missingRoutes from './missing-routes/missing-routes-router.js';
import login from './login/login-router.js';
import logout from './logout/logout-router.js';
import signup from './signup/signup-router.js';
import fail_login from './fail-login/fail-login-router.js';
import fail_signup from './fail-signup/fail-signup-router.js';

import sessionHandler from './middlewares/session-middleware.js';
// import { passportMiddleware, passportSessionHandler } from "./middlewares/passport-middleware.js";

const app = express();

app.use(json());
app.use(urlencoded({extended: true}));
app.use(express.static('public'));
app.use(sessionHandler);
// app.use(passportMiddleware);
// app.use(passportSessionHandler);
app.use('/api/shoppingcartproducts', cartsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/faillogin', fail_login);
app.use('/failsignup', fail_signup);
app.use('*', missingRoutes);

export default app;