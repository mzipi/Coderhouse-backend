import express, { json, urlencoded } from "express";

import cartsRouter from "./routers/carts-router.js";
import ordersRouter from "./routers/orders-router.js";
import productsRouter from "./routers/products-router.js";
import usersRouter from "./routers/users-router.js";
import missingRoutes from './missing-routes/missing-routes-router.js';
import loginRouter from './routers/login-router.js';
import logoutRouter from './routers/logout-router.js';
import signupRouter from './routers/signup-router.js';
import failLoginRouter from './routers/fail-login-router.js';
import failSignupRouter from './routers/fail-signup-router.js';

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
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/signup', signupRouter);
app.use('/faillogin', failLoginRouter);
app.use('/failsignup', failSignupRouter);
app.use('*', missingRoutes);

export default app;