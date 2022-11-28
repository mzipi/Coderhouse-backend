import express, { urlencoded, json } from "express";

import api_products from "./router/api_products-router.js";
import index from "./router/index-router.js";
// const products = require("./router/products-router.js");
import msg from "./router/msg-router.js";
import login from "./router/login-router.js";
import logout from "./router/logout-router.js";
import signup from "./router/signup-router.js";
import test from "./router/test-router.js";
import fail_login from "./router/fail_login-router.js";
import fail_register from "./router/fail_register-router.js";
import info from "./router/info-router.js";
import randoms from "./router/api_randoms-router.js";
import all from "./router/all-router.js";

import sessionHandler from "./middlewares/session-middleware.js";
import passportMiddleware from "./middlewares/passport.js";

const app = express();

app.set('view engine', 'ejs');

app.use(urlencoded({extended: true}));
app.use(json());
app.use(sessionHandler);
app.use(passportMiddleware);
app.use(express.static('public'));
app.use("/", index);
app.use("/faillogin", fail_login);
app.use("/failregister", fail_register);
app.use("/info", info);
app.use("/login", login);
app.use("/logout", logout);
// app.use("/productos", products)
app.use("/register", signup);
app.use("/api/productos", api_products);
app.use("/api/mensajes", msg);
app.use("/api/productos-test", test);
app.use("/api/randoms", randoms);
app.use("*", all);

export default app;