const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const api_products = require("./router/api_products-router.js");
const index = require("./router/index-router.js");
// const products = require("./router/products-router.js");
const msg = require("./router/msg-router.js");
const login = require("./router/login-router.js");
const logout = require("./router/logout-router.js");
const signup = require("./router/signup-router.js");
const test = require("./router/test-router.js");
const fail_login = require("./router/fail_login-router.js");
const fail_register = require("./router/fail_register-router.js");
const info = require("./router/info-router.js");
const randoms = require("./router/api_randoms-router.js");
const all = require("./router/all-router.js");

const sessionHandler = require("./middlewares/session-middleware.js");
const passportMiddleware = require("./middlewares/passport.js");

const app = express();

app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(sessionHandler);
app.use(passportMiddleware);
app.use(express.static(path.join(__dirname, '../public')));
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

module.exports = app;