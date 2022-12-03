import express, { urlencoded, json } from 'express';

import login from './api/routes/login-route.js';
import logout from './api/routes/logout-route.js';
import signup from './api/routes/signup-route.js';
import test from './api/routes/test-route.js';
import productsView from './api/routes/products-view.js';
import fail_login from './api/routes/fail_login-route.js';
import fail_signup from './api/routes/fail_signup-route.js';
import info from './api/routes/info-route.js';
import randoms from './api/routes/api_randoms-route.js';
import all from './api/routes/all-routes.js';
import products from './api/routes/products-router.js';
import msg from './api/routes/msg-router.js';

import sessionHandler from './api/middlewares/session-middleware.js';
import { passportMiddleware, passportSessionHandler } from './api/middlewares/passport-middleware.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(urlencoded({extended: true}));
app.use(json());
app.use(express.static('public'));
app.use(sessionHandler);
app.use(passportMiddleware);
app.use(passportSessionHandler);

app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/api/productos-test', test);
app.use('/productos', productsView);
app.use('/faillogin', fail_login);
app.use('/failsignup', fail_signup);
app.use('/info', info);
app.use('/api/randoms', randoms);
app.use('*', all);
app.use('/api/productos', products);
app.use('/api/mensajes', msg);

export default app;